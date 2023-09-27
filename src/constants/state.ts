export const STATE = {
  IDLE: 0,
  LOADING: 1,
  FAILURE: 2,
  SUCCESS: 3,
} as const;

export type State = (typeof STATE)[keyof typeof STATE];
