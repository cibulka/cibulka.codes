'use client';
import { THEME_MODE } from '@/constants/config';
import { ACTION } from '@/context/App.actionTypes';
import { useAppContext } from '@/context/App.utils';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';

export function ThemeSwitch(props: { labels: { dark: string; light: string } }) {
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
      aria-label={isDarkMode ? props.labels.light : props.labels.dark}
    >
      {isDarkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
}
