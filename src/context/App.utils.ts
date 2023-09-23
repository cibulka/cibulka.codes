import { useContext } from 'react';

import { AppContext } from './App.context';
import { ThemeColor } from './App.actionTypes';
import { THEME_MODE } from '@/constants/config';
import { THEME_DARK, THEME_LIGHT } from '@/constants/colors';

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error('Missing context');
  return appContext;
}

export function useGetColor() {
  const appContext = useAppContext();
  return function getColor(color: ThemeColor) {
    const isLight = appContext.state.theme.selected === THEME_MODE.LIGHT;
    const theme = isLight ? THEME_LIGHT : THEME_DARK;
    return theme[color];
  };
}
