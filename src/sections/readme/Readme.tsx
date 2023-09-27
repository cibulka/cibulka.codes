import { ErrorView } from '@/components/error-view/ErrorView';
import { MdxReader } from '@/components/mdx-reader/MdxReader';
import { Locale } from '@/constants/config';
import { getDocuments } from '@/content/getDocuments';

import styles from './Readme.module.css';

export function Readme(props: { isRoute?: boolean; locale: Locale }) {
  const readme = getDocuments(['Readme'], props.locale).find((doc) => doc.slug === 'readme');

  return readme ? (
    <div className={['text', styles.readme].join(' ')}>
      <MdxReader mdx={readme.body.code} locale={props.locale} />
    </div>
  ) : (
    <ErrorView locale={props.locale} />
  );
}
