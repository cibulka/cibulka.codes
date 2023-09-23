import { IconCopy } from '@/icons/IconCopy';
import React from 'react';

// TODO: Copy function
export function Contact(props: { href: string; value: string; icon: JSX.Element }) {
  return (
    <span className="flex gap-1 items-center rounded-md bg-chip">
      <a href={props.href} className="flex items-center flex-1 gap-1">
        <span className="w-6 h-6 p-0.5 ml-1 text-text_fade">{props.icon}</span>
        <span className="flex-1">{props.value}</span>
      </a>
      <button type="button" className="border-l ml-1 p-1 flex-shrink-0 w-8 h-8">
        <IconCopy />
      </button>
    </span>
  );
}
