import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { Locales, LOCALES } from '@/shared/i18n/config';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { LinkLocaleClient } from './link-client';
import { MenuLocaleClient } from './menu-client';
import { localeMessages, placeholderMessage } from './messages';

function getPlausibleEvent(locale: Locale) {
  switch (locale) {
    case 'cs':
      return PLAUSIBLE_GOALS.MENU_LOCALE_CS;
    case 'en':
      return PLAUSIBLE_GOALS.MENU_LOCALE_EN;
    default:
      return undefined;
  }
}

export async function MenuLocale(props: { locale: Locale }) {
  const { formatMessage } = await getIntl(props.locale);

  if (LOCALES.length === 1) {
    return formatMessage(localeMessages[props.locale]);
  }

  if (LOCALES.length === 2) {
    const newLocale = LOCALES.find((l) => l !== props.locale) as Locale;
    const { formatMessage: formatMessageLocalized } = await getIntl(newLocale);
    return (
      <LinkLocaleClient
        label={formatMessageLocalized(localeMessages[newLocale])}
        newLocale={newLocale}
      />
    );
  }

  const options = Object.values(Locales).map((l) => ({
    value: l,
    label: formatMessage(localeMessages[l]),
    plausible: getPlausibleEvent(l),
  }));
  return <MenuLocaleClient options={options} placeholder={formatMessage(placeholderMessage)} />;
}
