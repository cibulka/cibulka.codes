import dayjs from 'dayjs';
import 'dayjs/locale/cs';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { DATE_AVAILABILITY } from '@/constants/config';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';
import { metaMessages } from '@/shared/messages';

dayjs.extend(localizedFormat);

function getAvailabilityDate(locale: Locale) {
  dayjs.locale(locale);
  const minDate = dayjs().add(2, 'month');
  const date = dayjs(DATE_AVAILABILITY);
  return minDate.isAfter(date) ? minDate : date;
}

export async function getAvailabilityStr(locale: Locale) {
  const { formatMessage } = await getIntl(locale);
  const date = getAvailabilityDate(locale);

  const month = date.format('MMMM');
  const monthCapitalizedFirst = month.charAt(0).toUpperCase() + month.slice(1);

  return formatMessage(metaMessages.availability, {
    month: monthCapitalizedFirst,
    year: date.format('YYYY'),
  });
}
