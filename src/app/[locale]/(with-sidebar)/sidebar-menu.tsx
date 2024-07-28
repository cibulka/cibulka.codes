'use client';

import { useAppContext } from '@/context/app/hooks';
import { isRoute } from '@/utils/url';

type SidebarMenuOption = {
  className?: string;
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
        return (
          <li
            key={item.href}
            className={[isSelected ? 'text-xl font-semibold' : 'text-md', 'transition-all'].join(
              ' ',
            )}
          >
            <a
              href={item.href}
              className={[
                'flex items-center gap-2',
                'py-2 border-b-2',
                isSelected ? 'text-text' : 'text-text_fade',
                isSelected ? 'border-b-chip_dark' : 'border-b-chip',
                item.className,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={(e) => {
                if (!isRoute(item.href) && document) {
                  e.preventDefault();
                  const id = e.currentTarget.href.split('#')[1];
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.icon && <span className="w-6 h-6">{item.icon}</span>}
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
