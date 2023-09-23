import { notFound } from 'next/navigation';

import { Resume } from '@/components/resume/Resume';
import { isLocale } from '@/utils/typeguards';

import styles from './page.module.css';

export default function ResumePage(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : null;
  if (!locale) notFound();
  return (
    <div className={styles.wrap}>
      <Resume locale={locale} />
    </div>
  );
}
