import { getTranslationServer } from '@/utils/getTranslationServer';
import { getHomeMeta } from './home';
import { isLocale } from '@/utils/typeguards';
import { LOCALES } from '@/constants/config';

export async function getNotFoundMeta(localeProvided: string) {
  const homeMeta = await getHomeMeta(localeProvided);
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  const { t } = await getTranslationServer('common', locale);

  return {
    ...homeMeta,
    title: [t('404.title'), homeMeta.title].join(' | '),
  };
}
