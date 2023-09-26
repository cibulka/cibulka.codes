import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import { THEME_DARK } from '@/constants/colors';
import { getTranslationServer } from '@/utils/getTranslationServer';

import './[locale]/globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export default function LocaleLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className="bg-background text-text">
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
        <div className="bg-background text-text">{props.children}</div>
      </body>
    </html>
  );
}
