'use client';
import Link from 'next/link';

import { useAppContext } from '@/context/App.utils';
import { isRelativeFileUrl } from '@/utils/url';

type SidebarMenuOption = {
  label: string;
  href: string;
  icon?: JSX.Element;
};

export function SidebarMenu(props: { className?: string; options: SidebarMenuOption[] }) {
  const { state } = useAppContext();
  const { activeHomeSections } = state;

  return (
    <ul className={props.className}>
      {props.options.map((item, i) => {
        const isSelected =
          `#${activeHomeSections[0]}` === item.href || (activeHomeSections.length === 0 && i === 0);
        const El = item.href.startsWith('#') || isRelativeFileUrl(item.href) ? 'a' : Link;
        return (
          <li
            key={i}
            className={[isSelected ? 'text-xl font-semibold' : 'text-md', 'transition-all'].join(
              ' ',
            )}
          >
            <El
              href={item.href}
              className={[
                'flex items-center gap-2',
                'py-2 border-b-2',
                isSelected ? 'text-text' : 'text-text_fade',
                isSelected ? 'border-b-chip_dark' : 'border-b-chip',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {item.icon && <span className="w-6 h-6">{item.icon}</span>}
              {item.label}
            </El>
          </li>
        );
      })}
    </ul>
  );
}
