'use client';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';

import { IconX } from '@/icons/IconX';

export default function ModalLayout(props: PropsWithChildren) {
  const { back } = useRouter();
  return (
    <Dialog open onClose={back}>
      <div className="fixed inset-0 flex items-center justify-center">
        <span className="absolute inset-0 bg-black opacity-80" />
        <Dialog.Panel
          className={['relative z-10', 'rounded bg-white', 'flex flex-col'].join(' ')}
          style={{ maxWidth: '50em', maxHeight: 'calc(100vh - 4em)', overflow: 'auto' }}
        >
          <div className="py-8 px-4">{props.children}</div>
          <button
            type="button"
            className={[
              'absolute top-0 right-0',
              'w-8 h-8 p-0.5',
              'text-video',
              'focus:outline-offset-0',
            ].join(' ')}
            onClick={() => back()}
          >
            <IconX />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
