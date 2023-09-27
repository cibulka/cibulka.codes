'use client';
import { Fragment, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';

import { IconX } from '@/icons/IconX';

// TODO: Weird scroll to bottom on close
export default function ModalLayout(props: PropsWithChildren) {
  const { back } = useRouter();

  function onBack() {
    console.log('BACK');
    back();
  }

  return (
    <Dialog open onClose={onBack}>
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed flex items-center justify-center inset-0">
        <Dialog.Panel
          className={['relative z-10', 'rounded bg-white', 'flex flex-col'].join(' ')}
          style={{ maxWidth: '50em', maxHeight: 'calc(100vh - 4em)', overflow: 'auto' }}
        >
          <div className="sticky top-0">
            <button
              type="button"
              className={[
                'float-right',
                'w-8 h-8 p-0.5',
                'text-video',
                'focus:outline-offset-0',
              ].join(' ')}
              onClick={() => back()}
            >
              <IconX />
            </button>
          </div>
          <div className="pb-8 px-4">{props.children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
