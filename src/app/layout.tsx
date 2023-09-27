import { PropsWithChildren } from 'react';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';

import { LOCALES } from '@/constants/config';
import { isLocale } from '@/utils/typeguards';

import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export default function RootLayout(props: PropsWithChildren) {
  const headersList = headers();
  const localeProvided = headersList.get('x-locale');
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  return (
    <html lang={locale}>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
