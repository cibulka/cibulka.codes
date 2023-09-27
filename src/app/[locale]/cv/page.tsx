import { Locale } from '@/constants/config';
import { Resume } from '@/sections/resume/Resume';

import styles from './page.module.css';

export default function ResumePage(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  return (
    <div className={styles.wrap}>
      <Resume locale={locale} />
    </div>
  );
}
