import { Chip } from '@/components/chip/Chip';
import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function ChipHireMe(props: { className?: string; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);

  return (
    <Chip className={props.className} href="/hire-me">
      {t('hireMe.button')}
    </Chip>
  );
}
