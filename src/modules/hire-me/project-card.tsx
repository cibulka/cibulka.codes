import { IconArrowLeft } from '@/icons/IconArrowLeft';
import { PropsWithLocale } from '@/types/params';
import Link from 'next/link';
import { ReactNode } from 'react';

export function ProjectCard(
  props: PropsWithLocale<{ href: string; icon: ReactNode; title: string; subtitle: ReactNode }>,
) {
  const Wrap = props.href.startsWith('/') ? Link : 'a';

  return (
    <Wrap
      className={['py-1 px-2', 'bg-chip_light rounded-md', 'flex items-center gap-4'].join(' ')}
      href={props.href}
    >
      <div className="w-12 h-12 bg-page">{props.icon}</div>
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
      <div>
        <span className="w-12 h-12 block transform rotate-180">
          <IconArrowLeft />
        </span>
      </div>
    </Wrap>
  );
}
