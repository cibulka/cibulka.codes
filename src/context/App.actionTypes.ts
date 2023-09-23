import { THEME_DARK } from '@/constants/colors';
import { HomeSection, ThemeModePreference, ThemeModeSelected } from './App.types';

export const ACTION = {
  HOME_SECTION_ACTIVE_ADD: 'HOME_SECTION_ACTIVE_ADD',
  HOME_SECTION_ACTIVE_REMOVE: 'HOME_SECTION_ACTIVE_REMOVE',
  THEME_MODE: 'THEME_MODE',
  THEME_MODE_SYSTEM: 'THEME_MODE_SYSTEM',
} as const;

export type Action =
  | { type: typeof ACTION.HOME_SECTION_ACTIVE_ADD; payload: HomeSection }
  | { type: typeof ACTION.HOME_SECTION_ACTIVE_REMOVE; payload: HomeSection }
  | { type: typeof ACTION.THEME_MODE; payload: ThemeModePreference }
  | { type: typeof ACTION.THEME_MODE_SYSTEM; payload: ThemeModeSelected };

export type Theme = typeof THEME_DARK;
export type ThemeColor = keyof typeof THEME_DARK;
