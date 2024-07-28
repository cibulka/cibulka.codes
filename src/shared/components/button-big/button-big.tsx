import Link from 'next/link';
import { ReactNode } from 'react';

export const ButtonBig = (props: {
  className?: string;
  icon?: ReactNode;
  label: string;
  href: string;
}) => {
  const Root = props.href.startsWith('/') ? Link : 'a';
  return (
    <Root
      href={props.href}
      className={[
        props.className,
        'flex justify-between items-center gap-8',
        'h-10 px-2',
        'bg-chip rounded-md',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="text-sm font-semibold">{props.label}</span>
      <span className="w-8 h-8">{props.icon}</span>
    </Root>
  );
};
