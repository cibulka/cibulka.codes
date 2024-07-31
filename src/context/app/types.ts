import { HomeSectionId } from '@/constants/config';
import { ThemeMode } from '@/constants/ui';

export type AppContextValue = {
  activeHomeSections: HomeSectionId[];
  themeUser: ThemeMode | undefined;
  themeSystem: ThemeMode | undefined;
};
