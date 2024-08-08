import { getIntl } from '@/shared/i18n/get-intl';

import { ParamsWithLocale } from '@/types/params';
import { TetrisClient } from './client';
import { messages } from './messages';

export async function generateMetadata({ params: { locale } }: ParamsWithLocale) {
  const { formatMessage } = await getIntl(locale);
  return {
    title: formatMessage(messages.button),
  };
}

export default function TetrisPage({ params: { locale } }: ParamsWithLocale) {
  return <TetrisClient locale={locale} />;
}
