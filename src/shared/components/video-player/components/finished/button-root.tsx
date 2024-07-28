import { getLinkComponent } from '@/utils/url';

import { PropsWithChildren } from 'react';
import { FinishedButtonProps } from './types';

type FinishedButtonRootProps = PropsWithChildren<Pick<FinishedButtonProps, 'onClick' | 'href'>> & {
  className: string;
};

export function FinishedButtonRoot({
  children,
  href,
  onClick,
  className,
}: FinishedButtonRootProps) {
  if (href) {
    const Root = getLinkComponent(href);
    return (
      <Root className={className} href={href}>
        {children}
      </Root>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
