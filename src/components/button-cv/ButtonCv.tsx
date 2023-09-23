import { Button } from '@/components/button/Button';
import { Locale } from '@/constants/config';
import { IconCV } from '@/icons/IconCV';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function ButtonCV(props: { isSmall?: boolean; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <Button href={`/${props.locale}/cv.pdf`} icon={<IconCV />} isSmall={props.isSmall}>
      {t('cv.button')}
    </Button>
  );
}
