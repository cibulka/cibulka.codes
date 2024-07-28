export const VIDEO_STATE = {
  IDLE: 'IDLE',
  ERRORED: 'ERRORED',
  FINISHED: 'FINISHED',
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
};

export type VideoState = (typeof VIDEO_STATE)[keyof typeof VIDEO_STATE];
