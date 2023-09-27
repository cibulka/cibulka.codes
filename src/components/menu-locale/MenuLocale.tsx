import { LOCALES, Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';

import { MenuLocaleClient } from './components/MenuLocaleClient';

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
  const { t } = await getTranslationServer('common', props.locale);

  function getLabel(locale: Locale) {
    switch (locale) {
      case 'cs':
        return t('langs.cs');
      case 'en':
        return t('langs.en');
      case 'ru':
        return t('langs.ru');
      default:
        throw new Error(`Unknown locale ${locale}.`);
    }
  }

  const options = LOCALES.map((l) => ({
    value: l,
    label: getLabel(l),
    plausible: getPlausibleEvent(l),
  }));

  return <MenuLocaleClient options={options} placeholder={t('langPlaceholder')} />;
}
