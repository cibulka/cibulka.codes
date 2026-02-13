import { PropsWithChildren } from 'react';

import type { Locale } from '@/shared/i18n/types';
import { ParamsWithLocale } from '@/types/params';

import { Footer } from './footer';
import styles from './layout.module.css';
import { NavBar } from './nav-bar';
import { Sidebar } from './sidebar';

export default async function LayoutWithSidebar({
  children,
  params,
}: PropsWithChildren & ParamsWithLocale) {
  const { locale } = await params;
  const localeTyped = locale as Locale;
  return (
    <>
      <div className="relative">
        <div className={['w-full ml-auto mr-auto', styles.wrap].join(' ')}>
          <Sidebar
            className={styles.header}
            classNameHeaderInfo={styles.header_info}
            locale={localeTyped}
          />
          <div className={styles.content}>
            <div className="flex flex-col xl:gap-12 gap-8">{children}</div>
            <Footer locale={localeTyped} />
          </div>
        </div>
        <NavBar className={styles['contact-bar']} locale={localeTyped} />
      </div>
    </>
  );
}
