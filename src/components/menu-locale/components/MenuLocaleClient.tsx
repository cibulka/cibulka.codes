'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { Menu, MenuOption } from '@/components/menu/Menu';
import { Locale } from '@/constants/config';
import { useLocale } from '@/utils/useLocale';

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
