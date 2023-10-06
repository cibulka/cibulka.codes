'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { PlausibleGoal } from '@/constants/plausible';
import { Locale } from '@/constants/config';
import { usePlausibleEvent } from '@/utils/plausible';

import { VideoPlayerLabels } from '../VideoPlayer';
import { VIDEO_STATE, VideoState } from '../VideoPlayer.constants';

import { VideoControls } from './VideoControls';
import { VideoFinished } from './VideoFinished';

// TODO: Change time by clicking on the range
export function VideoPlayerClient(props: {
  labels: VideoPlayerLabels;
  locale: Locale;
  poster?: string;
  plausible: {
    onStart?: PlausibleGoal;
    onFinish?: PlausibleGoal;
  };
  priority: boolean;
  src: string;
}) {
  const [isRendered, setIsRendered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isOpaque, setIsOpaque] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const [isPlayRequested, setIsPlayRequested] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [time, setTime] = useState(0);
  const [playState, setPlayState] = useState<VideoState>(VIDEO_STATE.IDLE);

  const onStart = usePlausibleEvent(props.plausible.onStart);
  const onFinish = usePlausibleEvent(props.plausible.onFinish);

  const ref = useRef<HTMLVideoElement>(null);
  const isIdle = playState === VIDEO_STATE.IDLE;
  const isFinished = playState === VIDEO_STATE.FINISHED;
  const isPaused = playState === VIDEO_STATE.PAUSED;
  const isPlaying = playState === VIDEO_STATE.PLAYING;

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (isRendered) ref.current?.load();
  }, [isRendered]);

  const isPlay = isReady && isPlayRequested;
  useEffect(() => {
    if (isPlay) ref.current?.play();
  }, [isPlay]);

  return (
    <>
      {isRendered && (
        <video
          className={[
            'absolute top-0 left-0',
            'w-full h-full',
            'object-contain object-center',
            'transition-opacity',
            isIdle ? 'opacity-0' : 'opacity-100',
          ]
            .filter(Boolean)
            .join(' ')}
          muted={isMuted}
          onCanPlay={() => setIsReady(true)}
          onEnded={() => {
            setIsOpaque(true);
            setPlayState(VIDEO_STATE.FINISHED);
            if (onFinish) onFinish();
          }}
          onError={() => setPlayState(VIDEO_STATE.ERRORED)}
          onLoadedMetadata={(e) => {
            setDuration(Math.ceil(e.currentTarget.duration));
          }}
          onPause={() => setPlayState(VIDEO_STATE.PAUSED)}
          onPlay={() => {
            setPlayState(VIDEO_STATE.PLAYING);
            if (onStart) onStart();
          }}
          onTimeUpdate={(e) => {
            setTime(Math.ceil(e.currentTarget.currentTime));
          }}
          preload="auto"
          ref={ref}
          src={props.src}
        />
      )}
      {props.poster && (
        <Image
          alt="Video"
          src={props.poster}
          fill
          className={[
            'transition-opacity transition-700',
            isPlaying || isPaused ? 'opacity-0' : isOpaque ? 'opacity-50' : 'opacity-100',
          ].join(' ')}
          placeholder="blur"
          blurDataURL={props.poster}
          // TODO: True sizes here pls
          sizes="80vw"
          priority={props.priority}
        />
      )}

      <VideoFinished
        isFinished={isFinished}
        labels={props.labels}
        locale={props.locale}
        onReplay={() => ref.current?.play()}
      />

      <VideoControls
        duration={duration}
        isFinished={isFinished}
        isMuted={isMuted}
        isPlaying={isPlaying}
        isRendered={isRendered}
        labels={props.labels}
        onToggleMute={() => setIsMuted((old) => !old)}
        onTogglePlay={() => {
          setIsOpaque(false);
          if (isPlaying) {
            ref.current?.pause();
          } else if (isReady) {
            ref.current?.play();
            // if (ref.current) ref.current.currentTime = 148;
          } else {
            setIsPlayRequested(true);
          }
        }}
        time={time}
      />
    </>
  );
}
