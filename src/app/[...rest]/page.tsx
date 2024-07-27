import { NotFound } from '@/modules/not-found';
import { i18nConfig } from '@/shared/i18n/config';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';
import { ParamsRest } from '@/types/params';
import { Providers } from '../providers';
import { notFoundMessages } from './messages';

function getLocaleFromRest(params: string[]) {
  const firstSegment = typeof params[0] === 'string' ? (params[0] as Locale) : null;
  return firstSegment && i18nConfig.locales.includes(firstSegment)
    ? firstSegment
    : i18nConfig.defaultLocale;
}

export async function generateMetadata(props: ParamsRest) {
  const locale = getLocaleFromRest(props.params.rest);
  const { formatMessage } = await getIntl(locale);
  return {
    title: formatMessage(notFoundMessages.title),
  };
}

export default function NotFoundPageRest(props: ParamsRest) {
  const locale = getLocaleFromRest(props.params.rest);
  return (
    <Providers locale={locale}>
      <div className={['absolute inset-0', 'flex items-center justify-center'].join(' ')}>
        <NotFound locale={locale} />
      </div>
    </Providers>
  );
}
