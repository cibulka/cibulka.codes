import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import { Analytics } from '@vercel/analytics/react';

import { LOCALES } from '@/constants/config';
import { AppContextWrap } from '@/context/App.context';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getAvailabilityStr } from '@/utils/getAvailability';
import { getAbsoluteUrl } from '@/utils/url';

export async function generateMetadata(): Promise<Metadata> {
  const locale = LOCALES[0];
  const { t } = await getTranslationServer('common', locale);
  const availability = await getAvailabilityStr(locale);

  const titleDefault = [t('name'), t('tagline')].join(' | ');
  const homeUrl = getAbsoluteUrl('');

  return {
    title: {
      template: `%s | ${titleDefault}`,
      default: titleDefault,
    },
    description: [availability, t('location')].join(' | '),
    openGraph: {
      images: [
        { url: `/og_cibulka-codes.png`, width: 1200, height: 630 },
        { url: `/petr.jpg`, width: 2320, height: 3088 },
      ],
    },
    metadataBase: new URL(homeUrl),
    themeColor: '#ffffff',
    generator: t('name'),
    applicationName: t('name'),
    other: {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
    },
    manifest: '/site.webmanifest',
  };
}

export function generateStaticParams() {
  const result = LOCALES.map((locale) => ({
    locale,
  }));
  return result;
}

export const dynamicParams = false;

function ServicesProvider(props: PropsWithChildren & { isProduction: boolean }) {
  return (
    <PlausibleProvider domain="cibulka.codes" taggedEvents>
      {props.children}
      {props.isProduction && <Analytics />}
    </PlausibleProvider>
  );
}

export default async function LocaleLayout(props: PropsWithChildren & { modal: JSX.Element }) {
  return (
    <ServicesProvider isProduction={Boolean(process.env.IS_PRODUCTION)}>
      <AppContextWrap>
        {props.children}
        {props.modal}
      </AppContextWrap>
    </ServicesProvider>
  );
}
