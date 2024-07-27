import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { Locales } from '@/shared/i18n/config';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { MenuLocaleClient } from './client';
import { localeMessages, placeholderMessage } from './messages';

function getPlausibleEvent(locale: Locale) {
  switch (locale) {
    case 'cs':
      return PLAUSIBLE_GOALS.MENU_LOCALE_CS;
    case 'en':
      return PLAUSIBLE_GOALS.MENU_LOCALE_EN;
    case 'ru':
      return PLAUSIBLE_GOALS.MENU_LOCALE_RU;
    default:
      return undefined;
  }
}

export async function MenuLocale(props: { locale: Locale }) {
  const { formatMessage } = await getIntl(props.locale);

  function getLabel(locale: Locale) {
    switch (locale) {
      case 'cs':
        return formatMessage(localeMessages[Locales.CS]);
      case 'en':
        return formatMessage(localeMessages[Locales.EN]);
      case 'ru':
        return formatMessage(localeMessages[Locales.RU]);
      default:
        throw new Error(`Unknown locale ${locale}.`);
    }
  }

  const options = Object.values(Locales).map((l) => ({
    value: l,
    label: getLabel(l),
    plausible: getPlausibleEvent(l),
  }));

  return <MenuLocaleClient options={options} placeholder={formatMessage(placeholderMessage)} />;
}
