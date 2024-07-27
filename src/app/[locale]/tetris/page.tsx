import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { TetrisClient } from './client';
import { messages } from './messages';

export async function generateMetadata(props: { params: { locale: Locale } }) {
  const { formatMessage } = await getIntl(props.params.locale);
  return {
    title: formatMessage(messages.button),
  };
}

export default function TetrisPage() {
  return <TetrisClient />;
}
