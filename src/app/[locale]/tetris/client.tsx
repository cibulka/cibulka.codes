'use client';

import dynamic from 'next/dynamic';

import { PropsWithLocale } from '@/types/params';

const Tetris = dynamic(() => import('react-tetris-ts'), { ssr: false });

export function TetrisClient({ locale }: PropsWithLocale) {
  return <Tetris locale={locale} />;
}
