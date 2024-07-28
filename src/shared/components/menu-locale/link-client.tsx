'use client';

import { Locale } from '@/shared/i18n/types';
import { getLocalizedUrl } from '@/utils/url';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LinkLocaleClient(props: { label: string; newLocale: Locale }) {
  const currentHref = usePathname();
  return (
    <Link
      href={getLocalizedUrl(currentHref, props.newLocale)}
      className="text-sm font-semibold border-b-2 border-text_fade"
    >
      {props.label}
    </Link>
  );
}
