import { PropsWithLocale } from '@/types/params';

export enum VideoPlayerState {
  IDLE = 'IDLE',
  READY = 'READY',
  PAUSED = 'PAUSED',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
}

export type VideoPlayerProps = PropsWithLocale<{
  poster: string;
  src: string;
}>;
