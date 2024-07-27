import { HomeSectionId, ThemeMode } from '@/constants/config';

export type AppContextValue = {
  activeHomeSections: HomeSectionId[];
  theme: {
    user: ThemeMode;
    selected: ThemeMode.DARK | ThemeMode.LIGHT;
    system: ThemeMode.DARK | ThemeMode.LIGHT | undefined;
    isChanged: boolean;
  };
};
