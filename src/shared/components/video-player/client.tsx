'use client';

import { VideoControls } from './components/controls';
import { VideoFinished } from './components/finished';
import { useVideoContext } from './context';
import { VideoPoster } from './poster';
import { VideoPlayerProps, VideoPlayerState } from './types';

function getAspectRatioStyles({ aspectRatio }: Pick<VideoPlayerProps, 'aspectRatio'>) {
  const className = !aspectRatio
    ? 'aspect-video'
    : typeof aspectRatio === 'string'
    ? aspectRatio
    : undefined;

  const style =
    typeof aspectRatio === 'object'
      ? { paddingBottom: `${(aspectRatio.height / aspectRatio.width) * 100}%` }
      : undefined;

  return { className, style };
}

export function VideoPlayerClient(props: VideoPlayerProps) {
  const { callbacks, isFullScreen, isPoster, ref, videoState } = useVideoContext();

  const aspectRatio = getAspectRatioStyles({
    aspectRatio: props.aspectRatio,
  });

  return (
    <div
      className={[
        'bg-black',
        !isFullScreen && 'relative',
        isFullScreen && 'fixed inset-0 z-50',
        !isFullScreen && aspectRatio?.className,
      ].join(' ')}
      style={isFullScreen ? undefined : aspectRatio?.style}
    >
      {isPoster ? (
        <VideoPoster title={props.title} src={props.poster} />
      ) : (
        <>
          <video
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-contain"
            controls={false}
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
