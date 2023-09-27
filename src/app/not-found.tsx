import { headers } from 'next/headers';

import { LOCALES } from '@/constants/config';
import { NotFound } from '@/sections/not-found/NotFound';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

export async function generateMetadata() {
  const headersList = headers();
  const localeProvided = headersList.get('x-locale');
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  const { t } = await getTranslationServer('common', locale);
  return {
    title: t('404.title'),
  };
}

export default async function NotFoundPage() {
  const headersList = headers();
  const localeProvided = headersList.get('x-locale');
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  return (
    <div className={['absolute inset-0', 'flex items-center justify-center'].join(' ')}>
      <NotFound locale={locale} />
    </div>
  );
}
