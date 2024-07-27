import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { Locale } from '@/shared/i18n/types';
import { PropsWithLocale } from '@/types/params';
import { isAbsoluteUrl, isRelativeFileUrl } from '@/utils/url';

function ButtonWrap(
  props: PropsWithChildren & {
    className?: string;
    href?: string;
    locale: Locale;
    onClick?: () => void;
  },
) {
  if (props.href && !isAbsoluteUrl(props.href) && !isRelativeFileUrl(props.href)) {
    return (
      <Link href={props.href} className={props.className} locale={props.locale}>
        {props.children}
      </Link>
    );
  }

  if (props.href) {
    return (
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={props.className} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function Button(
  props: PropsWithChildren &
    PropsWithLocale & {
      className?: string;
      href?: string;
      icon?: JSX.Element;
      isSmall?: boolean;
      onClick?: () => void;
    },
) {
  return (
    <ButtonWrap
      className={
        props.isSmall
          ? [
              props.className,
              'relative flex items-center gap-2',
              'p-2',
              'rounded-md bg-button text-button_text',
              'border-button_shade border-0.5 border-b-2.5',
              'hover:border active:border-2 hover:border-b-2 active:border-b-2',
            ].join(' ')
          : [
              props.className,
              'relative flex items-center gap-4',
              'px-9 py-2',
              'rounded-lg bg-button text-button_text',
              'border-button_shade border-0.5 border-b-5',
              'hover:border-2 active:border-2 hover:border-b-4 active:border-b-4',
            ].join(' ')
      }
      href={props.href}
      locale={props.locale}
      onClick={props.onClick}
    >
      {props.icon && (
        <span className={['flex-shrink-0', props.isSmall ? 'w-6 h-6' : 'w-8 h-8'].join(' ')}>
          {props.icon}
        </span>
      )}
      <span
        className={[
          'whitespace-nowrap',
          !props.isSmall && 'bg:text-xl text-lg',
          props.isSmall && 'text-sm',
          'font-semibold',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {props.children}
      </span>
    </ButtonWrap>
  );
}
