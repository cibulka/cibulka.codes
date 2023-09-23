import { LOCALES, Locale } from '@/constants/config';

export function isLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}
