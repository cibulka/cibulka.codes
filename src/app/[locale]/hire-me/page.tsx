import { HireMe } from '@/modules/hire-me/page';
import { getIntl } from '@/shared/i18n/get-intl';
import { hireMeMessage } from '@/shared/messages';
import { ParamsWithLocale } from '@/types/params';

export async function generateMetadata(props: ParamsWithLocale) {
  const { formatMessage } = await getIntl(props.params.locale);
  return {
    title: formatMessage(hireMeMessage),
  };
}

export default function HireMePage({ params: { locale } }: ParamsWithLocale) {
  return <HireMe locale={locale} />;
}
