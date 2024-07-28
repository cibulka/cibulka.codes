'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { VideoPlayerState } from '../types';
import { VideoCallbacks, VideoContextValue } from './types';

const initial = {
  actions: null,
  callbacks: null,
  currentTime: 0,
  duration: null,
  ref: null,
  isFullScreen: false,
  isLoading: true,
  isMuted: false,
  isPoster: true,
  loaded: 0,
  played: 0,
  showVideo: null,
  videoState: VideoPlayerState.IDLE,
};

export const VideoContext = createContext<VideoContextValue>(initial);

export const VideoContextProvider = (props: PropsWithChildren) => {
  const [videoState, setVideoState] = useState(initial.videoState);
  const [isFullScreen, setIsFullScreen] = useState(initial.isFullScreen);
  const [isLoading, setIsLoading] = useState(initial.isLoading);
  const [isMuted, setIsMuted] = useState(initial.isMuted);
  const [isPoster, setIsPoster] = useState(initial.isPoster);
  const [loaded, setLoaded] = useState(initial.loaded);
  const [duration, setDuration] = useState<null | number>(initial.duration);
  const [currentTime, setCurrentTime] = useState(initial.currentTime);

  const videoRef = useRef<HTMLVideoElement>(null);

  const callbacks: VideoCallbacks = useMemo(
    () => ({
      onEnded: () => setVideoState(VideoPlayerState.FINISHED),
      onLoadedMetadata: (event) => {
        setDuration(event.currentTarget.duration);
      },
      onPause: () => setVideoState(VideoPlayerState.PAUSED),
      onPlay: () => setVideoState(VideoPlayerState.PLAYING),
      onProgress: () => {
        const { buffered, duration } = videoRef.current || {};
        const length = buffered?.length;
        if (length && duration) {
          const end = buffered.end(length - 1);
          setLoaded(end / duration);
        }
      },
      onCanPlay: () => setIsLoading(false),
      onSeek: () => setIsLoading(true),
      onTimeUpdate: () => {
        const { currentTime } = videoRef.current || {};
        if (typeof currentTime === 'number') setCurrentTime(Math.floor(currentTime));
      },
    }),
    [],
  );

  const actions = useMemo(
    () => ({
      replay: () => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      },
      togglePlay: () => {
        setVideoState((old) => {
          if (!videoRef.current) return old;
          if (videoState === VideoPlayerState.PLAYING) {
            videoRef.current.pause();
            return VideoPlayerState.PAUSED;
          } else {
            videoRef.current.play();
            return VideoPlayerState.PLAYING;
          }
        });
      },
      toggleMute: () => {
        setIsMuted((old) => {
          if (!videoRef.current) return old;
          videoRef.current.muted = !old;
          return !old;
        });
      },
      toggleFullScreen: () => setIsFullScreen((old) => !old),
      setCurrentTime: (timestamp: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = timestamp;
      },
    }),
    [videoState],
  );

  const showVideo = useCallback(() => setIsPoster(false), []);

  const played = duration ? Math.floor(currentTime) / duration : 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsFullScreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <VideoContext.Provider
      value={{
        actions,
        callbacks,
        currentTime,
        duration,
        loaded,
        ref: videoRef,
        isFullScreen,
        isLoading,
        isMuted,
        isPoster,
        played,
        showVideo,
        videoState,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};
