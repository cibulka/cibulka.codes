import { Metadata } from 'next';

import { getAvailabilityStr } from '@/utils/getAvailability';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

export async function getHomeMeta(localeProvided: string): Promise<Metadata> {
  const locale = isLocale(localeProvided) ? localeProvided : 'en';
  const { t } = await getTranslationServer('common', locale);
  const availability = await getAvailabilityStr(locale);
  return {
    title: [t('name'), t('tagline')].join(' | '),
    description: [availability, t('location')].join(' | '),
    openGraph: { images: [`/${locale}/image`, `/petr.jpg`] },
  };
}
