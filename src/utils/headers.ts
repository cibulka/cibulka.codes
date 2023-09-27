import { headers } from 'next/headers';

import { LOCALES } from '@/constants/config';

import { isLocale } from './typeguards';

export const X_HEADER_LOCALE = 'x-locale';

export function getLocaleFromHeaders() {
  const headersList = headers();
  const localeProvided = headersList.get('x-locale');
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
}
