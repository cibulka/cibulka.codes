'use client';
import React, { PropsWithChildren, useReducer } from 'react';

import { HomeSectionId, ThemeMode } from '@/constants/config';

import { AppAction } from './action-types';
import { appReducer } from './reducer';
import { AppCssVars } from './styles';

/* Types */

export type AppContextValue = {
  activeHomeSections: HomeSectionId[];
  theme: ThemeMode.DARK | ThemeMode.LIGHT;
};

/* Context */

// TODO: Dark mode - Respect system setting

export const AppContext = React.createContext<{
  state: AppContextValue;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider(props: PropsWithChildren) {
  const initialState = {
    activeHomeSections: [],
    theme: ThemeMode.LIGHT,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppCssVars />
      {props.children}
    </AppContext.Provider>
  );
}
