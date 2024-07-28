'use client';
import { ThemeMode } from '@/constants/config';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { AppActionType } from '@/context/app/action-types';
import { useAppContext } from '@/context/app/hooks';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';
import { usePlausibleEvent } from '@/utils/plausible';

export function ThemeSwitch(props: { labels: { dark: string; light: string } }) {
  const { dispatch, state } = useAppContext();
  const isDarkMode = state.theme === ThemeMode.DARK;
  const onClickPlausible = usePlausibleEvent(PLAUSIBLE_GOALS.DARK_MODE);
  return (
    <button
      className="w-6 h-6"
      type="button"
      onClick={() => {
        dispatch({
          type: AppActionType.THEME_MODE,
          payload: isDarkMode ? ThemeMode.LIGHT : ThemeMode.DARK,
        });
        if (onClickPlausible) onClickPlausible();
      }}
      aria-label={isDarkMode ? props.labels.light : props.labels.dark}
    >
      {isDarkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
}
