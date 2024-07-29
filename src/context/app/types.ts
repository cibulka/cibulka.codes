import { HomeSectionId, ThemeMode } from '@/constants/config';

export type AppContextValue = {
  activeHomeSections: HomeSectionId[];
  themeUser: ThemeMode | undefined;
  themeSystem: ThemeMode | undefined;
};
