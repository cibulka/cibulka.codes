import { DATE_AVAILABILITY } from '@/constants/config';
import { IconCalendarOK } from '@/icons/IconCalendarOK';
import { IconX } from '@/icons/IconX';
import { Chip, ChipVariant } from '@/shared/components/chip';
import { PropsWithLocale } from '@/types/params';
import { getAvailabilityStr } from '@/utils/get-availability';

export async function ChipAvailability(props: PropsWithLocale) {
  const str = await getAvailabilityStr(props.locale);
  return (
    <Chip icon={DATE_AVAILABILITY ? <IconCalendarOK className="text-action" /> : <IconX className="text-red-500" />} variant={ChipVariant.TRANSPARENT}>
      {str}
    </Chip>
  );
}
