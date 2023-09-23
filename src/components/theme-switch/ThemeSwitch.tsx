'use client';
import { THEME_MODE } from '@/constants/config';
import { ACTION } from '@/context/App.actionTypes';
import { useAppContext } from '@/context/App.utils';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';

export function ThemeSwitch() {
  const { dispatch, state } = useAppContext();
  const isDarkMode = state.theme.selected === THEME_MODE.DARK;
  return (
    <button
      className="w-6 h-6"
      type="button"
      onClick={() => {
        dispatch({
          type: ACTION.THEME_MODE,
          payload: isDarkMode ? THEME_MODE.LIGHT : THEME_MODE.DARK,
        });
      }}
    >
      {isDarkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
}
