export enum Locales {
  CS = 'cs',
  EN = 'en',
}

export const LOCALES = Object.values(Locales);

export const i18nConfig = {
  locales: Object.values(Locales),
  defaultLocale: Locales.EN,
  serverSetCookie: 'never',
} as const;
