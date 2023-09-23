import { LOCALES, Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { MenuLocaleClient } from './components/MenuLocaleClient';

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
    disabled: l === 'ru',
  }));

  return <MenuLocaleClient options={options} placeholder={t('langPlaceholder')} />;
}
