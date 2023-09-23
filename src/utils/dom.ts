import { ReactNode } from 'react';

export function isParagraphNode(children: ReactNode[]) {
  const firstEl = children[0];
  return typeof firstEl === 'string' || (firstEl as any)?.type === 'strong';
}
