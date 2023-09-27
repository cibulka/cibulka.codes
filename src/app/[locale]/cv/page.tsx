import { LOCALES } from '@/constants/config';
import { Resume } from '@/sections/resume/Resume';
import { isLocale } from '@/utils/typeguards';

import styles from './page.module.css';

export default function ResumePage(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : LOCALES[0];
  return (
    <div className={styles.wrap}>
      <Resume locale={locale} />
    </div>
  );
}
