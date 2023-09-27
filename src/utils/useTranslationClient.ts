'use client';
import i18next, { Namespace } from 'i18next';
import { initReactI18next, useTranslation as useTranslationLib } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

import { I18N_DEFAULT_NS } from '@/constants/config';
import { LOCALES } from '@/constants/config';

import { useLocale } from './useLocale';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((loc: string, ns: string) => {
      return import(`../../localization/${loc}/${ns}.json`);
    }),
  )
  .init({
    supportedLngs: LOCALES,
    fallbackLng: LOCALES[0],
    fallbackNS: I18N_DEFAULT_NS,
    defaultNS: I18N_DEFAULT_NS,
  });

export function useTranslationClient(ns: Namespace, locale?: string) {
  const localeFromHref = useLocale();
  const localeRequested = locale || localeFromHref;
  if (i18next.resolvedLanguage !== localeRequested) i18next.changeLanguage(localeRequested);
  return useTranslationLib(ns);
}

export function useTranslationClientWithLocale(ns: Namespace, locale: string) {
  if (i18next.resolvedLanguage !== locale) i18next.changeLanguage(locale);
  return useTranslationLib(ns);
}
