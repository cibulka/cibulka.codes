import { getIntl } from '@/shared/i18n/get-intl';
import type { Locale } from '@/shared/i18n/types';
import { ParamsWithLocale } from '@/types/params';
import { TetrisClient } from './client';
import { messages } from './messages';

export async function generateMetadata({ params }: ParamsWithLocale) {
  const { locale } = await params;
  const { formatMessage } = await getIntl(locale as Locale);
  return {
    title: formatMessage(messages.button),
  };
}

export default async function TetrisPage({ params }: ParamsWithLocale) {
  const { locale } = await params;
  return <TetrisClient locale={locale as Locale} />;
}
