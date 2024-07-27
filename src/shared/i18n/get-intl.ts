'server-only';

import { createIntl } from '@formatjs/intl';

import { i18nConfig } from './config';
import { I18n, I18nImport, Locale } from './types';

const cache = new Map<Locale, I18n>();

async function importLocale(locale: Locale) {
  const messages = (await import(`../../../messages-compiled/${locale}.json`)) as I18nImport;
  return messages.default;
}

async function getMessages(locale: Locale) {
  try {
    return importLocale(locale);
  } catch (error) {
    console.error(error);
    console.error(
      `Failed to load messages for locale "${locale}". Using default locale "${i18nConfig.defaultLocale}".`,
    );
    return importLocale(i18nConfig.defaultLocale);
  }
}

export async function getIntl(locale: Locale) {
  if (cache.has(locale)) {
    return cache.get(locale) as NonNullable<ReturnType<typeof cache.get>>;
  }

  const intl = createIntl({
    defaultLocale: i18nConfig.defaultLocale,
    locale,
    messages: await getMessages(locale),
  });
  cache.set(locale, intl);

  return intl;
}
