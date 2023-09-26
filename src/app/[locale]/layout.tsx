import { PropsWithChildren, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { LOCALES } from '@/constants/config';
import { THEME_DARK } from '@/constants/colors';
import { AppContextWrap } from '@/context/App.context';

import './globals.css';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export async function generateMetadata(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : 'en';
  const { t } = await getTranslationServer('common', locale);
  return {
    title: [t('name'), t('tagline')].join(' | '),
    description: [t('availability'), t('location')].join(' | '),
  };
}

export default function LocaleLayout(
  props: PropsWithChildren & { modal: ReactNode; params?: { locale: string } },
) {
  return (
    <html lang={props.params?.locale || LOCALES[0]} className="bg-background text-text">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={THEME_DARK.action} />
        <meta name="msapplication-TileColor" content={THEME_DARK.action} />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <AppContextWrap>{props.children}</AppContextWrap>
        {props.modal}
      </body>
    </html>
  );
}
