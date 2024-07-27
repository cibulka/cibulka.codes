'use client';
import { usePathname, useRouter } from 'next/navigation';

import { Menu, MenuOption } from '@/shared/components/menu';
import { Locale } from '@/shared/i18n/types';
import { useLocale } from '@/shared/i18n/use-locale';

export function MenuLocaleClient(props: { options: MenuOption<Locale>[]; placeholder: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Menu
      options={props.options}
      placeholder={props.placeholder}
      onChange={(newLocale) => {
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
      }}
      value={locale}
    />
  );
}
