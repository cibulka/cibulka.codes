import { Locale } from '@/shared/i18n/types';

export type ParamsWithLocale<T = {}> = T & {
  params: Promise<{
    locale: string;
  }>;
};

export type PropsWithLocale<T = {}> = T & {
  locale: Locale;
};

export type ParamsRest<T = {}> = T & {
  params: Promise<{
    rest: string[];
  }>;
};
