import { THEME_DARK } from '@/constants/colors';
import { HomeSectionId, ThemeMode } from '@/constants/config';

export enum AppActionType {
  HOME_SECTION_ACTIVE_ADD = 'HOME_SECTION_ACTIVE_ADD',
  HOME_SECTION_ACTIVE_REMOVE = 'HOME_SECTION_ACTIVE_REMOVE',
  THEME_MODE = 'THEME_MODE',
}

export type AppAction =
  | { type: AppActionType.HOME_SECTION_ACTIVE_ADD; payload: HomeSectionId }
  | { type: AppActionType.HOME_SECTION_ACTIVE_REMOVE; payload: HomeSectionId }
  | { type: AppActionType.THEME_MODE; payload: ThemeMode.DARK | ThemeMode.LIGHT };

export type Theme = typeof THEME_DARK;
export type ThemeColor = keyof typeof THEME_DARK;
