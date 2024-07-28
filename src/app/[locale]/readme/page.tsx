import { Readme } from '@/modules/readme';
import { getIntl } from '@/shared/i18n/get-intl';
import { ParamsWithLocale } from '@/types/params';

import { messages } from './messages';

export async function generateMetadata(props: ParamsWithLocale) {
  const { formatMessage } = await getIntl(props.params.locale);
  return {
    title: formatMessage(messages.title),
  };
}

export default function ReadMePage(props: ParamsWithLocale) {
  return <Readme locale={props.params.locale} />;
}
