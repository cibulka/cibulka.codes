import { Locale } from '@/constants/config';
import { Resume } from '@/sections/resume/Resume';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function generateMetadata(props: { params: { locale: Locale } }) {
  const { t } = await getTranslationServer('common', props.params.locale);
  return {
    title: t('cv.button'),
  };
}

export default function ResumePage(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  return <Resume isRoute locale={locale} />;
}
