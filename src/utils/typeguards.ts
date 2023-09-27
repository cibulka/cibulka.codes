import { LOCALES, Locale } from '@/constants/config';

export function isLocale(locale: unknown): locale is Locale {
  return typeof locale === 'string' && LOCALES.includes(locale as Locale);
}
