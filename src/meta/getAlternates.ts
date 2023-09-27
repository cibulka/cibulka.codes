import { LOCALES } from '@/constants/config';
import { joinPathname } from '@/utils/url';

export function getAlternates(locale: string, slug?: string) {
  const languages: Record<string, string> = {};
  LOCALES.filter((l) => l !== locale).forEach((l) => {
    languages[l] = joinPathname(l, slug);
  });

  return {
    canonical: joinPathname(locale, slug),
    languages,
  };
}
