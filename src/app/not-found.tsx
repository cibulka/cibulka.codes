import { Inter } from 'next/font/google';

import { NotFound } from '@/components/not-found/NotFound';
import { THEME_DARK } from '@/constants/colors';
import { getTranslationServer } from '@/utils/getTranslationServer';

import { getHref, getLocale } from './layout.utils';
import './[locale]/globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

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
