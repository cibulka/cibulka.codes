import { headers } from 'next/headers';

import { NotFound } from '@/components/not-found/NotFound';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { LOCALES } from '@/constants/config';
import { isLocale } from '@/utils/typeguards';

export async function generateMetadata() {
  const { t } = await getTranslationServer('common', 'en');
  return {
    title: [t('404.title'), t('name'), t('tagline')].join(' | '),
    description: [t('availability'), t('location')].join(' | '),
  };
}

function getLocale(url: string | null) {
  const locale = url?.split('/').reverse()[1];
  return locale && isLocale(locale) ? locale : LOCALES[0];
}

export default async function NotFoundPage() {
  const headersList = headers();
  const href =
    headersList.get('x-path') ||
    headersList.get('referer') ||
    headersList.get('url') ||
    headersList.get('x-invoke-path');
  const locale = getLocale(href);
  return <NotFound locale={locale} href={href} />;
}
