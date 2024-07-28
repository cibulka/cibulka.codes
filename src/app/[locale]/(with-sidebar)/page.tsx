import { getAlternates } from '@/meta/get-alternates';
import { HomePage } from '@/modules/home/page';
import { ParamsWithLocale } from '@/types/params';

// TODO: Tetris README (english)

export function generateMetadata(props: ParamsWithLocale) {
  return {
    alternates: getAlternates(props.params.locale),
  };
}

export default async function Home(props: ParamsWithLocale) {
  return <HomePage {...props} />;
}
