'use client';

import { VideoControls } from './components/controls';
import { VideoFinished } from './components/finished';
import { useVideoContext } from './context';
import { VideoPoster } from './poster';
import { VideoPlayerProps, VideoPlayerState } from './types';

export function VideoPlayerClient(props: VideoPlayerProps) {
  const { callbacks, isFullScreen, isHover, isPoster, ref, videoState } = useVideoContext();

  return (
    <div
      className={[
        'bg-black',
        // TODO: Allow different aspect ratios
        !isFullScreen && 'aspect-video relative',
        isFullScreen && 'fixed inset-0 z-50',
      ].join(' ')}
    >
      {isPoster ? (
        <>
          {/* TODO: Add proper alt */}
          <VideoPoster alt="" src={props.poster} />
        </>
      ) : (
        <>
          <video
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls={isHover === false}
            onCanPlay={callbacks?.onCanPlay}
            onEnded={callbacks?.onEnded}
            onLoadedMetadata={callbacks?.onLoadedMetadata}
            onPause={callbacks?.onPause}
            onPlay={callbacks?.onPlay}
            onSeeking={callbacks?.onSeek}
            onProgress={callbacks?.onProgress}
            onTimeUpdate={callbacks?.onTimeUpdate}
            ref={ref}
            src={props.src}
          />
          <VideoControls />
        </>
      )}
      {videoState === VideoPlayerState.FINISHED && <VideoFinished />}
    </div>
  );
}
