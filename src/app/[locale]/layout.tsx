import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Providers } from '@/app/providers';
import { LOCALES } from '@/shared/i18n/config';
import { getIntl } from '@/shared/i18n/get-intl';
import { metaMessages } from '@/shared/messages';
import { ParamsWithLocale } from '@/types/params';
import { getAvailabilityStr } from '@/utils/get-availability';
import { getAbsoluteUrl } from '@/utils/url';

export async function generateMetadata(): Promise<Metadata> {
  const locale = LOCALES[0];
  const { formatMessage } = await getIntl(locale);
  const availability = await getAvailabilityStr(locale);

  const titleDefault = [formatMessage(metaMessages.name), formatMessage(metaMessages.tagline)].join(
    ' | ',
  );
  const homeUrl = getAbsoluteUrl('');

  return {
    title: {
      template: `%s | ${titleDefault}`,
      default: titleDefault,
    },
    description: [availability, formatMessage(metaMessages.location)].join(' | '),
    openGraph: {
      images: [
        { url: `/og_cibulka-codes.png`, width: 1200, height: 630 },
        { url: `/petr.jpg`, width: 2320, height: 3088 },
      ],
    },
    metadataBase: new URL(homeUrl),
    generator: formatMessage(metaMessages.name),
    applicationName: formatMessage(metaMessages.name),
    other: {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
    },
    manifest: '/site.webmanifest',
  };
}

export const viewport = {
  themeColor: '#ffffff',
};

export function generateStaticParams() {
  const result = LOCALES.map((locale) => ({
    locale,
  }));
  return result;
}

export const dynamicParams = false;

export default function LocaleLayout(props: PropsWithChildren & ParamsWithLocale) {
  return <Providers locale={props.params.locale}>{props.children}</Providers>;
}
