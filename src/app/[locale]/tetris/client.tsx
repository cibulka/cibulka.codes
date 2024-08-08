'use client';
import Tetris from 'react-tetris-ts';

import { PropsWithLocale } from '@/types/params';

export function TetrisClient({ locale }: PropsWithLocale) {
  return <Tetris locale={locale} />;
}
