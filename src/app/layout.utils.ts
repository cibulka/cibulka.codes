import { headers } from 'next/headers';

import { LOCALES } from '@/constants/config';
import { isLocale } from '@/utils/typeguards';

export function getHref() {
  const headersList = headers();
  return (
    headersList.get('x-path') ||
    headersList.get('referer') ||
    headersList.get('url') ||
    headersList.get('x-invoke-path')
  );
}

export function getLocale(url: string | null) {
  const locale = url?.split('/').reverse()[1];
  return locale && isLocale(locale) ? locale : LOCALES[0];
}
