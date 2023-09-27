export const PLAUSIBLE_GOALS = {
  DARK_MODE: 'DARK_MODE',
  EDUCATION: 'EDUCATION',
  LINK_AFTER_RUSSIA: 'LINK_AFTER_RUSSIA',
  LINK_DOTU: 'LINK_DOTU',
  LINK_PORTFOLIO: 'LINK_PORTFOLIO',
  LINK_TETRIS: 'LINK_TETRIS',
  VIDEO_DOTU_STARTED: 'VIDEO_DOTU_STARTED',
  VIDEO_DOTU_FINISHED: 'VIDEO_DOTU_FINISHED',
  VIDEO_AFTER_RUSSIA_STARTED: 'VIDEO_AFTER_RUSSIA_STARTED',
  VIDEO_AFTER_RUSSIA_FINISHED: 'VIDEO_AFTER_RUSSIA_FINISHED',
  GITHUB: 'GITHUB',
  LINKED_IN: 'LINKED_IN',
} as const;

export type PlausibleGoal = (typeof PLAUSIBLE_GOALS)[keyof typeof PLAUSIBLE_GOALS];
