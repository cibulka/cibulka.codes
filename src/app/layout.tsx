import { getHomeMeta } from '@/meta/home';
import { PropsWithChildren } from 'react';

export default async function LocaleLayout(props: PropsWithChildren) {
  const { title, description } = await getHomeMeta('en');
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
