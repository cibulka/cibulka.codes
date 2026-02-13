import { Resume } from '@/modules/resume';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { messages } from './messages';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { formatMessage } = await getIntl(locale as Locale);
  return {
    title: formatMessage(messages.button),
  };
}

export default async function ResumePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  return <Resume locale={locale as Locale} />;
}
