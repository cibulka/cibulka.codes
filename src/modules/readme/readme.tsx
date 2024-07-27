import { ErrorView } from '@/modules/error-view';

import { Paper } from '@/shared/components/paper';
import { MdxReader } from '@/shared/mdx-reader';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { PropsWithLocale } from '@/types/params';
import styles from './Readme.module.css';

export function Readme(props: PropsWithLocale) {
  const readme = getDocuments(['Readme'], props.locale).find((doc) => doc.slug === 'readme');

  return (
    <Paper isCentered>
      {readme ? (
        <div className={['text', styles.readme].join(' ')}>
          <MdxReader mdx={readme.body.code} locale={props.locale} />
        </div>
      ) : (
        <ErrorView locale={props.locale} />
      )}
    </Paper>
  );
}
