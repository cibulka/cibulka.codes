export enum Locales {
  CS = 'cs',
  EN = 'en',
  RU = 'ru',
}

export const LOCALES = Object.values(Locales);

export const i18nConfig = {
  locales: Object.values(Locales),
  defaultLocale: Locales.EN,
};
