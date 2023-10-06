import { headers } from 'next/headers';

import { LOCALES } from '@/constants/config';
import { X_HEADER_LOCALE } from '@/constants/headers';

import { isLocale } from './typeguards';

export function getServerLocale(localeParams?: string) {
  if (isLocale(localeParams)) return localeParams;
  const headersList = headers();
  const localeProvided = headersList.get(X_HEADER_LOCALE);
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  return locale;
}
