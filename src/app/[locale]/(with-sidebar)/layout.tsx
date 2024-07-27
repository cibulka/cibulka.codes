import { PropsWithChildren, ReactNode } from 'react';

import { ParamsWithLocale } from '@/types/params';

import { Footer } from './footer';
import styles from './layout.module.css';
import { NavBar } from './nav-bar';
import { Sidebar } from './sidebar';

export default async function LayoutWithSidebar({
  children,
  modal,
  params: { locale },
}: PropsWithChildren & ParamsWithLocale & { modal: ReactNode }) {
  return (
    <>
      <div className="relative">
        <div className={['w-full ml-auto mr-auto', styles.wrap].join(' ')}>
          <Sidebar
            className={styles.header}
            classNameHeaderInfo={styles.header_info}
            locale={locale}
          />
          <div className={styles.content}>
            <div className="flex flex-col xl:gap-12 gap-8">{children}</div>
            <Footer locale={locale} />
          </div>
        </div>
        <NavBar className={styles['contact-bar']} locale={locale} />
      </div>
      {modal}
    </>
  );
}
