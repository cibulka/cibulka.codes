'use client';
import { useMemo } from 'react';

import { THEME_DARK, ThemeColor } from '@/constants/colors';

import { useAppContext, useGetColor } from './hooks';

export function AppCssVars() {
  const {
    state: { themeUser },
  } = useAppContext();
  const getDefaultColor = useGetColor();

  const style = useMemo(() => {
    const defaultRules = Object.keys(THEME_DARK)
      .map((key) => {
        const color = key as ThemeColor;
        return `--${color}: ${getDefaultColor(color)};`;
      })
      .join('');

    const darkModeRules = Object.keys(THEME_DARK)
      .map((key) => {
        const color = key as ThemeColor;
        return `--${color}: ${THEME_DARK[color]};`;
      })
      .join('');

    let result = `
      :root {
        ${defaultRules}
      }
    `;

    if (!themeUser) {
      result += `
        @media (prefers-color-scheme:dark) {
          :root {
            ${darkModeRules}
          }
        }
      `;
    }

    return result.replace(/\s+/g, '');
  }, [getDefaultColor, themeUser]);

  return <style>{style}</style>;
}
