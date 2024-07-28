import { PropsWithChildren, ReactNode } from 'react';

import styles from './styles.module.css';

function PaperWrap(props: PropsWithChildren & { isCentered: boolean }) {
  if (!props.isCentered) return props.children;
  return <div className={styles.centered}>{props.children}</div>;
}

export function Paper(
  props: PropsWithChildren & { backLink?: ReactNode; isCentered?: boolean; isSinglePage?: boolean },
) {
  return (
    <PaperWrap isCentered={Boolean(props.isCentered)}>
      {props.backLink && (
        <div className={[styles['max-w-paper'], 'mb-4'].join(' ')}>{props.backLink}</div>
      )}
      <div
        className={[
          styles.container,
          styles['max-w-paper'],
          'bg-paper',
          props.isSinglePage && styles['is-single-page'],
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {props.children}
      </div>
    </PaperWrap>
  );
}
