import { HOME_SECTIONS, THEME_MODE } from '@/constants/config';

export type ThemeModePreference =
  | typeof THEME_MODE.DARK
  | typeof THEME_MODE.LIGHT
  | typeof THEME_MODE.SYSTEM;

export type ThemeModeSelected = typeof THEME_MODE.DARK | typeof THEME_MODE.LIGHT;

export type HomeSection = (typeof HOME_SECTIONS)[keyof typeof HOME_SECTIONS];
