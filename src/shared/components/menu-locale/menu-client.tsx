'use client';
import { usePathname } from 'next/navigation';

import { Menu, MenuOption } from '@/shared/components/menu';
import { Locale } from '@/shared/i18n/types';
import { useLocale } from '@/shared/i18n/use-locale';
import { getLocalizedUrl } from '@/utils/url';

export function MenuLocaleClient(props: { options: MenuOption<Locale>[]; placeholder: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <Menu
      options={props.options}
      placeholder={props.placeholder}
      onChange={(newLocale) => getLocalizedUrl(pathname, newLocale)}
      value={locale}
    />
  );
}
