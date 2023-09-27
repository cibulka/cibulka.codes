export const THEME_MODE = {
  DARK: 'THEME_MODE_DARK',
  LIGHT: 'THEME_MODE_LIGHT',
  SYSTEM: 'THEME_MODE_SYSTEM',
};

export const CONTACT = {
  EMAIL: 'cibulka.me@gmail.com',
  PHONE: '+420 776 695 975',
  GITHUB: 'https://www.github.com/cibulka',
  LINKED_IN: '',
};

export const DATE_AVAILABILITY = '2023-10-06';

export const LOCALES = ['en', 'cs', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const I18N_DEFAULT_NS = 'common' as const;

export const FEATURED = ['dotu', 'after-russia', 'tetris'];

export const HOME_SECTIONS = {
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  EDUCATION: 'education',
} as const;
