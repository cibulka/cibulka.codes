import { Chip } from '@/components/chip/Chip';
import { Locale } from '@/constants/config';
import { IconCalendarOK } from '@/icons/IconCalendarOK';
import { getAvailabilityStr } from '@/utils/getAvailability';

export async function ChipAvailability(props: { locale: Locale }) {
  const str = await getAvailabilityStr(props.locale);
  return <Chip icon={<IconCalendarOK />}>{str}</Chip>;
}
