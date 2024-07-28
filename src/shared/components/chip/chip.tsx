import Link from 'next/link';
import { ElementType, PropsWithChildren } from 'react';

import { isAbsoluteUrl } from '@/utils/url';

import { ChipVariant } from './types';

export function Chip(
  props: PropsWithChildren & {
    className?: string;
    href?: string;
    icon?: JSX.Element;
    isBorder?: boolean;
    isIconRight?: boolean;
    isNoUnderline?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    variant?: ChipVariant;
  },
) {
  const variant = props.variant || ChipVariant.TRANSPARENT;
  const isAbsolute = props.href && isAbsoluteUrl(props.href);

  let Wrap: ElementType;
  if (props.href) {
    Wrap = isAbsolute ? 'a' : Link;
  } else if (props.onClick) {
    Wrap = 'button';
  } else {
    Wrap = 'span';
  }

  return (
    <Wrap
      className={[
        props.className,
        'inline-flex items-center gap-1',
        'rounded-md text-sm',
        variant === ChipVariant.BASIC && 'bg-chip border border-chip_dark',
        variant === ChipVariant.PRIMARY && 'bg-action px-2 py-1',
        variant !== ChipVariant.TRANSPARENT && 'px-1',
      ]
        .filter(Boolean)
        .join(' ')}
      href={props.href}
      onClick={props.onClick}
      type={Wrap === 'button' ? 'button' : undefined}
      target={Wrap === 'a' && isAbsolute ? '_blank' : undefined}
    >
      {props.icon && (
        <span
          className={[
            'w-6 h-6',
            variant === ChipVariant.BASIC && 'text-text_fade',
            props.isIconRight && 'order-2',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {props.icon}
        </span>
      )}
      <span
        className={[
          'font-semibold',
          'flex-1 whitespace-nowrap',
          (props.href || props.onClick) && !props.isNoUnderline && 'border-b-2 border-text_fade',
        ].join(' ')}
      >
        {props.children}
      </span>
    </Wrap>
  );
}
