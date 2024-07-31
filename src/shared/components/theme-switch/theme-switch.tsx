'use client';
import { useEffect, useState } from 'react';

import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { ThemeMode } from '@/constants/ui';
import { AppActionType } from '@/context/app/action-types';
import { useAppContext, useLightMode } from '@/context/app/hooks';
import { IconMoon } from '@/icons/IconMoon';
import { IconSun } from '@/icons/IconSun';
import { usePlausibleEvent } from '@/utils/plausible';

export function ThemeSwitch(props: { labels: { dark: string; light: string } }) {
  const [isRendered, setIsRendered] = useState(false);

  const { state, dispatch } = useAppContext();
  const mode = useLightMode();
  const isDarkMode = mode === ThemeMode.DARK;
  const onClickPlausible = usePlausibleEvent(PLAUSIBLE_GOALS.DARK_MODE);

  const isReady = Boolean(state.themeSystem);
  useEffect(() => {
    if (isReady) setIsRendered(true);
  }, [isReady]);

  if (!state.themeSystem) {
    return null;
  }

  return (
    <button
      className={['w-6 h-6', isRendered ? 'opacity-100' : 'opacity-0', 'transition-opacity'].join(
        ' ',
      )}
      type="button"
      onClick={() => {
        dispatch?.({
          type: AppActionType.THEME_USER,
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
