import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import { getServerLocale } from '@/utils/locale';

import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export default function RootLayout(props: PropsWithChildren) {
  const locale = getServerLocale();
  return (
    <html lang={locale}>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
