import { Resume } from '@/modules/resume';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { messages } from './messages';

export async function generateMetadata(props: { params: { locale: Locale } }) {
  const { formatMessage } = await getIntl(props.params.locale);
  return {
    title: formatMessage(messages.button),
  };
}

export default function ResumePage(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  return <Resume locale={locale} />;
}
