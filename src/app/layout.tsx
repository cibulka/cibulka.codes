import { PropsWithChildren, ReactNode, cache } from 'react';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';

import { LOCALES, Locale, X_HEADER_LOCALE } from '@/constants/config';
import { THEME_DARK } from '@/constants/colors';
import { AppContextWrap } from '@/context/App.context';

import './globals.css';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getAvailabilityStr } from '@/utils/getAvailability';
import { getAbsoluteUrl } from '@/utils/url';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const getLocaleServer = cache((): Locale => {
  const preference = headers().get(X_HEADER_LOCALE);
  const result = preference || LOCALES[0];
  return result as Locale;
});

export async function generateMetadata() {
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
    metadataBase: homeUrl,
    themeColor: '#ffffff',
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
