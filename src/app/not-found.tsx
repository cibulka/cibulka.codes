import { NotFound } from '@/sections/not-found/NotFound';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getServerLocale } from '@/utils/locale';

export async function generateMetadata() {
  const locale = getServerLocale();
  const { t } = await getTranslationServer('common', locale);
  return {
    title: t('404.title'),
  };
}

export default async function NotFoundPage() {
  const locale = getServerLocale();
  return (
    <div className={['absolute inset-0', 'flex items-center justify-center'].join(' ')}>
      <NotFound locale={locale} />
    </div>
  );
}
