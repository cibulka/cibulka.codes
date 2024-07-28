import { DOMAIN } from '@/constants/url';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { PropsWithChildren } from 'react';

export function ServicesProvider(props: PropsWithChildren & { isProduction: boolean }) {
  return (
    <PlausibleProvider domain={DOMAIN} taggedEvents>
      {props.children}
      {props.isProduction && <Analytics />}
    </PlausibleProvider>
  );
}
