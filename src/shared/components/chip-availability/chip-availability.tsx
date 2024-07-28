import { IconCalendarOK } from '@/icons/IconCalendarOK';
import { Chip, ChipVariant } from '@/shared/components/chip';
import { PropsWithLocale } from '@/types/params';
import { getAvailabilityStr } from '@/utils/get-availability';

export async function ChipAvailability(props: PropsWithLocale) {
  const str = await getAvailabilityStr(props.locale);
  return (
    <Chip icon={<IconCalendarOK className="text-action" />} variant={ChipVariant.TRANSPARENT}>
      {str}
    </Chip>
  );
}
