'use client';
import { useContext } from 'react';

import { THEME_DARK, THEME_LIGHT } from '@/constants/colors';
import { ThemeMode } from '@/constants/config';

import { ThemeColor } from './action-types';
import { AppContext } from './provider';

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error('Missing context');
  return appContext;
}

export function useGetColor() {
  const appContext = useAppContext();
  return function getColor(color: ThemeColor) {
    const isLight = appContext.state.theme === ThemeMode.LIGHT;
    const theme = isLight ? THEME_LIGHT : THEME_DARK;
    return theme[color];
  };
}
