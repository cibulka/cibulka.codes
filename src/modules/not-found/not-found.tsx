import { ErrorView } from '@/modules/error-view';
import { getIntl } from '@/shared/i18n/get-intl';
import { PropsWithLocale } from '@/types/params';

import { messages } from './messages';

export async function NotFound(props: PropsWithLocale) {
  const { formatMessage } = await getIntl(props.locale);
  return (
    <ErrorView
      locale={props.locale}
      title={formatMessage(messages.title)}
      subTitle={formatMessage(messages.subTitle)}
    />
  );
}
