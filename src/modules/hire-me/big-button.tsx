import { ReactNode } from 'react';

export function BigButton(props: { href: string; icon: ReactNode; label: ReactNode }) {
  return (
    <a href={props.href} className="flex items-center gap-4 bg-chip rounded-md py-1 px-4">
      <span className="text-xl underline flex-1">{props.label}</span>
      <div className="w-12 h-12">{props.icon}</div>
    </a>
  );
}
