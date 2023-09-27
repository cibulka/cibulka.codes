import { NotFound } from '@/sections/not-found/NotFound';
import { getTranslationServer } from '@/utils/getTranslationServer';

import { getLocaleServer } from './layout';

export async function generateMetadata() {
  const locale = getLocaleServer();
  const { t } = await getTranslationServer('common', locale);
  return {
    title: t('404.title'),
  };
}

export default async function NotFoundPage() {
  const locale = getLocaleServer();
  return <NotFound locale={locale} />;
}
