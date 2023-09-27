import { PropsWithChildren, cache } from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';

import { LOCALES, Locale, X_HEADER_LOCALE } from '@/constants/config';
import { AppContextWrap } from '@/context/App.context';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getAvailabilityStr } from '@/utils/getAvailability';
import { getAbsoluteUrl } from '@/utils/url';

import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const getLocaleServer = cache((): Locale => {
  const preference = headers().get(X_HEADER_LOCALE);
  const result = preference || LOCALES[0];
  return result as Locale;
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleServer();
  const { t } = await getTranslationServer('common', locale);
  const availability = await getAvailabilityStr(locale);

  const titleDefault = [t('name'), t('tagline')].join(' | ');
  const homeUrl = getAbsoluteUrl('');

  return {
    title: {
      template: `%s | ${titleDefault}`,
      default: titleDefault,
    },
    description: [availability, t('location')].join(' | '),
    openGraph: {
      images: [
        { url: `/og_cibulka-codes.png`, width: 1200, height: 630 },
        { url: `/petr.jpg`, width: 2320, height: 3088 },
      ],
    },
    metadataBase: new URL(homeUrl),
    themeColor: '#ffffff',
    applicationName: t('name'),
    other: {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
    },
  };
}

export default async function LocaleLayout(props: PropsWithChildren) {
  const locale = getLocaleServer();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppContextWrap>{props.children}</AppContextWrap>
      </body>
    </html>
  );
}
