import { PropsWithChildren } from 'react';

import styles from './LayoutPaper.module.css';

function LayoutPaperWrap(props: PropsWithChildren & { isRoute: boolean }) {
  if (!props.isRoute) return props.children;
  return <div className={styles.centered}>{props.children}</div>;
}

export function LayoutPaper(
  props: PropsWithChildren & { isRoute?: boolean; isSinglePage?: boolean },
) {
  return (
    <LayoutPaperWrap isRoute={Boolean(props.isRoute)}>
      <div
        className={[styles.container, props.isSinglePage && styles['is-single-page']]
          .filter(Boolean)
          .join(' ')}
      >
        {props.children}
      </div>
    </LayoutPaperWrap>
  );
}
