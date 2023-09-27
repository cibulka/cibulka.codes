export const PLAUSIBLE_GOALS = {
  DARK_MODE: 'DARK_MODE',
  EDUCATION: 'EDUCATION', // works
  LINK_AFTER_RUSSIA: 'LINK_AFTER_RUSSIA',
  LINK_DOTU: 'LINK_DOTU',
  LINK_PORTFOLIO: 'LINK_PORTFOLIO',
  LINK_TETRIS: 'LINK_TETRIS',
  MENU_LOCALE_CS: 'MENU_LOCALE_CS',
  MENU_LOCALE_EN: 'MENU_LOCALE_EN',
  MENU_LOCALE_RU: 'MENU_LOCALE_RU',
  VIDEO_DOTU_STARTED: 'VIDEO_DOTU_STARTED',
  VIDEO_DOTU_FINISHED: 'VIDEO_DOTU_FINISHED',
  VIDEO_AFTER_RUSSIA_STARTED: 'VIDEO_AFTER_RUSSIA_STARTED',
  VIDEO_AFTER_RUSSIA_FINISHED: 'VIDEO_AFTER_RUSSIA_FINISHED',
  GITHUB: 'GITHUB', // works
  LINKED_IN: 'LINKED_IN', // works
} as const;

export type PlausibleGoal = (typeof PLAUSIBLE_GOALS)[keyof typeof PLAUSIBLE_GOALS];
