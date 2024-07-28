import { RefObject, SyntheticEvent } from 'react';

import { VideoPlayerState } from '../types';

export type VideoCallbacks = {
  onEnded: () => void;
  onLoadedMetadata: (event: SyntheticEvent<HTMLVideoElement, Event>) => void;
  onPause: () => void;
  onPlay: () => void;
  onProgress: () => void;
  onCanPlay: () => void;
  onSeek: () => void;
  onTimeUpdate: () => void;
};

export type VideoContextValue = {
  actions: null | {
    replay: () => void;
    setCurrentTime: (value: number) => void;
    toggleFullScreen: () => void;
    togglePlay: () => void;
    toggleMute: () => void;
  };
  callbacks: null | VideoCallbacks;
  currentTime: number;
  duration: null | number;
  loaded: number;
  isFullScreen: boolean;
  isHover: undefined | boolean;
  isLoading: boolean;
  isMuted: boolean;
  isPoster: boolean;
  played: number;
  ref: RefObject<HTMLVideoElement> | null;
  showVideo: null | (() => void);
  videoState: VideoPlayerState;
};
