'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Locale } from '@/shared/i18n/types';
import { getLocalizedUrl } from '@/utils/url';

export function LinkLocaleClient(props: { label: string; newLocale: Locale }) {
  const pathname = usePathname();
  const href = getLocalizedUrl(pathname, props.newLocale);

  return (
    <Link
      href={href}
      className="text-sm font-semibold border-b-2 border-text_fade"
    >
      {props.label}
    </Link>
  );
}
