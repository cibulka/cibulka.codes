import { Chip } from '@/components/chip/Chip';
import { Locale } from '@/constants/config';
import { URLS } from '@/constants/url';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function ChipHireMe(props: { className?: string; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);

  return (
    <Chip className={props.className} href={URLS.HIRE_ME}>
      {t('hireMe.button')}
    </Chip>
  );
}
