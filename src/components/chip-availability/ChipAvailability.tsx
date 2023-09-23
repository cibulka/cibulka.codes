import dayjs from 'dayjs';

import { Chip } from '@/components/chip/Chip';
import { DATE_AVAILABILITY, Locale } from '@/constants/config';
import { IconCalendarOK } from '@/icons/IconCalendarOK';
import { getTranslationServer } from '@/utils/getTranslationServer';

function getDate() {
  const minDate = dayjs().add(1, 'month');
  const date = dayjs(DATE_AVAILABILITY);
  return minDate.isAfter(date) ? minDate : date;
}

export async function ChipAvailability(props: { locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  const date = getDate();

  return (
    <Chip icon={<IconCalendarOK />}>
      {t('availability', { month: date.format('MM'), year: date.format('YY') })}
    </Chip>
  );
}
