'use client';
import React, { PropsWithChildren, useEffect, useReducer } from 'react';

import { THEME_MODE } from '@/constants/config';

import { AppCssVars } from './components/AppCssVars';

import { HomeSection, ThemeModePreference, ThemeModeSelected } from './App.types';
import { appReducer } from './App.reducer';
import { ACTION, Action } from './App.actionTypes';

/* Types */

export type ContextValue = {
  activeHomeSections: HomeSection[];
  theme: {
    user: ThemeModePreference;
    selected: ThemeModeSelected;
    system: ThemeModeSelected | undefined;
    isChanged: boolean;
  };
};

/* Context */

export const AppContext = React.createContext<{
  state: ContextValue;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AppContextWrap(props: PropsWithChildren) {
  const initialState = {
    activeHomeSections: [],
    theme: {
      user: THEME_MODE.LIGHT,
      selected: THEME_MODE.LIGHT,
      system: undefined,
      isChanged: false,
    },
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const isDark = window.matchMedia('prefers-color-scheme: dark').matches;
    dispatch({
      type: ACTION.THEME_MODE_SYSTEM,
      payload: isDark ? THEME_MODE.DARK : THEME_MODE.LIGHT,
    });
  }, [dispatch]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <AppCssVars />
        {props.children}
      </AppContext.Provider>
    </>
  );
}
