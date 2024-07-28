import { Locale } from '@/shared/i18n/types';

export type ParamsWithLocale<T = {}> = T & {
  params: {
    locale: Locale;
  };
};

export type PropsWithLocale<T = {}> = T & {
  locale: Locale;
};

export type ParamsRest<T = {}> = T & {
  params: {
    rest: string[];
  };
};
