import dayjs from 'dayjs';

import { DATE_AVAILABILITY, Locale } from '@/constants/config';

import { getTranslationServer } from './getTranslationServer';

function getAvailabilityDate() {
  const minDate = dayjs().add(1, 'month');
  const date = dayjs(DATE_AVAILABILITY);
  return minDate.isAfter(date) ? minDate : date;
}

export async function getAvailabilityStr(locale: Locale) {
  const { t } = await getTranslationServer('common', locale);
  const date = getAvailabilityDate();
  return t('availability', { month: date.format('MM'), year: date.format('YY') });
}
