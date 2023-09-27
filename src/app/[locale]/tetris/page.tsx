import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';

import { TetrisClient } from './client';

export async function generateMetadata(props: { params: { locale: Locale } }) {
  const { t } = await getTranslationServer('common', props.params.locale);
  return {
    title: t('tetris.button'),
  };
}

export default function TetrisPage() {
  return <TetrisClient />;
}
