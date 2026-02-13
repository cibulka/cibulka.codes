import { Readme } from '@/modules/readme';
import { getIntl } from '@/shared/i18n/get-intl';
import type { Locale } from '@/shared/i18n/types';
import { ParamsWithLocale } from '@/types/params';

import { messages } from './messages';

export async function generateMetadata(props: ParamsWithLocale) {
  const { locale } = await props.params;
  const { formatMessage } = await getIntl(locale as Locale);
  return {
    title: formatMessage(messages.title),
  };
}

export default async function ReadMePage(props: ParamsWithLocale) {
  const { locale } = await props.params;
  return <Readme locale={locale as Locale} />;
}
