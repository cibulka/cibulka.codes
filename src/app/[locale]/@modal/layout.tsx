'use client';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import { Modal } from '@/components/modal/Modal';

export default function LayoutModal(props: PropsWithChildren) {
  const { back } = useRouter();
  return <Modal onClose={back}>{props.children}</Modal>;
}
