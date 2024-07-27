'use client';

import { PropsWithLocale } from '@/types/params';
import { PropsWithChildren } from 'react';
import { IntlProvider as IntlProviderLib, MessageFormatElement } from 'react-intl';

export function IntlProvider(
  props: PropsWithChildren<
    PropsWithLocale<{ messages: Record<string, string> | Record<string, MessageFormatElement[]> }>
  >,
) {
  return (
    <IntlProviderLib messages={props.messages} locale={props.locale}>
      {props.children}
    </IntlProviderLib>
  );
}
