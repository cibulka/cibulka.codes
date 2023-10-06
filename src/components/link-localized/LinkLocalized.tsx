import { CSSProperties, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

import { Locale } from '@/constants/config';
import { getLocalizedHref } from '@/utils/url';

export function LinkLocalized(
  props: LinkProps &
    PropsWithChildren & { className?: string; href: string; locale: Locale; style?: CSSProperties },
) {
  const href = getLocalizedHref(props.href, props.locale);
  return (
    <Link {...props} href={href}>
      {props.children}
    </Link>
  );
}
