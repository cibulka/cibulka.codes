'use client';
import { THEME_MODE } from '@/constants/config';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { ACTION } from '@/context/App.actionTypes';
import { useAppContext } from '@/context/App.utils';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';
import { getClassNamePlausible } from '@/utils/plausible';

export function ThemeSwitch(props: { labels: { dark: string; light: string } }) {
  const { dispatch, state } = useAppContext();
  const isDarkMode = state.theme.selected === THEME_MODE.DARK;
  return (
    <button
      className={['w-6 h-6', getClassNamePlausible(PLAUSIBLE_GOALS.DARK_MODE)].join(' ')}
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
