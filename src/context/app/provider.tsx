'use client';
import React, { PropsWithChildren, useReducer } from 'react';

import { HomeSectionId, ThemeMode } from '@/constants/config';

import { AppAction } from './action-types';
import { AppCssVars } from './css-vars';
import { appReducer } from './reducer';
import { useSystemLightMode } from './use-system-light-mode';

/* Types */

export type AppContextValue = {
  activeHomeSections: HomeSectionId[];
  themeSystem: ThemeMode.DARK | ThemeMode.LIGHT | undefined;
  themeUser: ThemeMode.DARK | ThemeMode.LIGHT | undefined;
};

/* Context */

// TODO: Dark mode - Respect system setting

const initialState: AppContextValue = {
  activeHomeSections: [],
  themeSystem: undefined,
  themeUser: undefined,
};

export const AppContext = React.createContext<{
  state: AppContextValue;
  dispatch: React.Dispatch<AppAction> | null;
}>({ state: initialState, dispatch: null });

export function AppProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useSystemLightMode({ dispatch });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppCssVars />
      {props.children}
    </AppContext.Provider>
  );
}
