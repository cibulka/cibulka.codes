import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

export async function getHomeMeta(localeProvided: string) {
  const locale = isLocale(localeProvided) ? localeProvided : 'en';
  const { t } = await getTranslationServer('common', locale);
  return {
    title: [t('name'), t('tagline')].join(' | '),
    description: [t('availability'), t('location')].join(' | '),
  };
}
