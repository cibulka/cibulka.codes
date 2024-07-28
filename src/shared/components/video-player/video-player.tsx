import { VideoPlayerClient } from './client';
import { VideoContextProvider } from './context';
import { VideoPlayerProps } from './types';

export function VideoPlayer(props: VideoPlayerProps) {
  return (
    <VideoContextProvider>
      <VideoPlayerClient {...props} />
    </VideoContextProvider>
  );
}
