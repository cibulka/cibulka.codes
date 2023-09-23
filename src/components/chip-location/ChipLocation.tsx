import { Chip } from '@/components/chip/Chip';
import { Locale } from '@/constants/config';
import { IconPin } from '@/icons/IconPin';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function ChipLocation(props: { locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  return <Chip icon={<IconPin />}>{t('location')}</Chip>;
}
