import { PropsWithChildren } from 'react';

import { getNotFoundMeta } from '@/meta/not-found';

import { getHref, getLocale } from './layout.utils';

export default async function LocaleLayout(props: PropsWithChildren) {
  const href = getHref();
  const locale = getLocale(href);
  const { title, description } = await getNotFoundMeta(locale);
  return (
    <html>
      <head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content="{description}" />}
      </head>
      <body>{props.children}</body>
    </html>
  );
}
