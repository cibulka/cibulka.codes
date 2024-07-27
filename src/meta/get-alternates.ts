import { LOCALES } from '@/shared/i18n/config';
import { Locale } from '@/shared/i18n/types';
import { joinPathname } from '@/utils/url';

export function getAlternates(locale: Locale, slug?: string) {
  const languages: Record<string, string> = {};
  LOCALES.filter((l) => l !== locale).forEach((l) => {
    languages[l] = joinPathname(l, slug);
  });

  return {
    canonical: joinPathname(locale, slug),
    languages,
  };
}
