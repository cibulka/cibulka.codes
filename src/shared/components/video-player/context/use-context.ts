import { useContext } from 'react';

import { VideoContext } from './provider';

export function useVideoContext() {
  const videoContext = useContext(VideoContext);
  return videoContext;
}
