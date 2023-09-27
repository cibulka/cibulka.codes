import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import { NotFound } from '@/components/not-found/NotFound';
import { LOCALES } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

import './[locale]/globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export function getHref() {
  const headersList = headers();
  return (
    headersList.get('x-path') ||
    headersList.get('referer') ||
    headersList.get('url') ||
    headersList.get('x-invoke-path')
  );
}

export function getLocale(url: string | null) {
  const locale = url?.split('/').reverse()[1];
  return locale && isLocale(locale) ? locale : LOCALES[0];
}

export async function generateMetadata() {
  const href = getHref();
  const locale = getLocale(href);
  const { t } = await getTranslationServer('common', locale);
  return {
    title: [t('404.title'), t('name'), t('tagline')].join(' | '),
    description: [t('availability'), t('location')].join(' | '),
  };
}

export default function NotFoundPage() {
  const href = getHref();
  const locale = getLocale(href);
  return <NotFound locale={locale} href={href} />;
}
