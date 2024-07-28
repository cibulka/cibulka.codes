'use client';

import { useIntl } from 'react-intl';

import { Copy } from '@/shared/components/copy';
import { copyMessage } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';

export function Contact(
  props: PropsWithLocale<{
    href: string;
    value: string;
    icon: JSX.Element;
  }>,
) {
  const { formatMessage } = useIntl();
  return (
    <span className="flex gap-1 items-center rounded-md bg-chip h-10">
      <a href={props.href} className="flex items-center flex-1 gap-1">
        <span className="w-6 h-6 p-0.5 ml-1 text-text_fade">{props.icon}</span>
        <span className="font-semibold text-sm flex-1">{props.value}</span>
      </a>
      <Copy
        className="border-l ml-1 p-1.5 flex-shrink-0 w-10 h-10"
        label={formatMessage(copyMessage)}
        value={props.value}
      />
    </span>
  );
}
