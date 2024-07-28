import { IconPin } from '@/icons/IconPin';
import { Chip } from '@/shared/components/chip';
import { getIntl } from '@/shared/i18n/get-intl';
import { metaMessages } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';

export async function ChipLocation({ locale }: PropsWithLocale) {
  const { formatMessage } = await getIntl(locale);
  return <Chip icon={<IconPin />}>{formatMessage(metaMessages.location)}</Chip>;
}
