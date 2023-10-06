import { ElementType, PropsWithChildren } from 'react';

import { LinkLocalized } from '@/components/link-localized/LinkLocalized';
import { isAbsoluteUrl } from '@/utils/url';

export type ChipVariant = 'naked' | 'transparent' | 'basic' | 'primary';

export function Chip(
  props: PropsWithChildren & {
    className?: string;
    href?: string;
    icon?: JSX.Element;
    isBorder?: boolean;
    isIconRight?: boolean;
    isNoUnderline?: boolean;
    onClick?: () => void;
    variant?: ChipVariant;
  },
) {
  const variant = props.variant || 'transparent';
  const isAbsolute = props.href && isAbsoluteUrl(props.href);

  let Wrap: ElementType;
  if (props.href) {
    Wrap = isAbsolute ? 'a' : LinkLocalized;
  } else if (props.onClick) {
    Wrap = 'button';
  } else {
    Wrap = 'span';
  }

  return (
    <Wrap
      className={[
        props.className,
        'inline-flex items-center',
        'rounded-md text-sm',
        variant === 'basic' && 'bg-chip border border-chip_dark',
        variant === 'primary' && 'bg-action',
        variant !== 'transparent' && 'px-1',
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
            'w-6 h-6 p-0.5',
            variant === 'basic' && 'text-text_fade',
            props.isIconRight && 'order-2',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {props.icon}
        </span>
      )}
      <span className="p-1">
        <span
          className={[
            'font-semibold',
            'flex-1 whitespace-nowrap',
            (props.href || props.onClick) && !props.isNoUnderline && 'border-b-2 border-text_fade',
          ].join(' ')}
        >
          {props.children}
        </span>
      </span>
    </Wrap>
  );
}
