'use client';
import { useContext } from 'react';

import { ThemeColor, THEMES } from '@/constants/colors';
import { ThemeMode } from '@/constants/ui';

import { AppContext } from './provider';

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error('Missing context');
  return appContext;
}

export function useLightMode() {
  const { state } = useContext(AppContext);
  return state.themeUser || state.themeSystem || ThemeMode.LIGHT;
}

export function useGetColor() {
  const mode = useLightMode();
  return function getColor(color: ThemeColor) {
    return THEMES[mode][color];
  };
}
