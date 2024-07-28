import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { YearsOfExperience } from '@/shared/blocks/years-of-experience';
import { Locale } from '@/shared/i18n/types';
import { isParagraphNode } from '@/utils/dom';
import { isAbsoluteUrl } from '@/utils/url';

export function getComponents(locale: Locale) {
  return {
    a: (p: PropsWithChildren & { href: string }) => {
      const isExternal = isAbsoluteUrl(p.href);
      return isExternal ? (
        <a {...p} target="_blank" rel="noreferrer">
          {p.children}
        </a>
      ) : (
        <Link href={p.href} locale={locale}>
          {p.children}
        </Link>
      );
    },
    p: (p: PropsWithChildren) => {
      const isParagraph =
        typeof p.children === 'string' ||
        (Array.isArray(p.children) && isParagraphNode(p.children));

      return isParagraph ? <p>{p.children}</p> : <>{p.children}</>;
    },
    NoWrap: (p: PropsWithChildren) => {
      return <span className="whitespace-nowrap">{p.children}</span>;
    },
    YearsOfExperience,
  };
}
