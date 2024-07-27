import { useCurrentLocale } from 'next-i18n-router/client';
import { i18nConfig } from './config';

export function useLocale() {
  return useCurrentLocale(i18nConfig);
}
