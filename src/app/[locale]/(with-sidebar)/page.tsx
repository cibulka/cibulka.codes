import { getAlternates } from '@/meta/get-alternates';
import { HomePage } from '@/modules/home/page';
import type { Locale } from '@/shared/i18n/types';
import { ParamsWithLocale } from '@/types/params';

// TODO: Tetris README (english)

export async function generateMetadata(props: ParamsWithLocale) {
  const { locale } = await props.params;
  return {
    alternates: getAlternates(locale as Locale),
  };
}

export default async function Home(props: ParamsWithLocale) {
  return <HomePage {...props} />;
}
