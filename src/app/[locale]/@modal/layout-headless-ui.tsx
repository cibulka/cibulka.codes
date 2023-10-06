'use client';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';

import { IconX } from '@/icons/IconX';

/**
 * HeadlessUI unfortunately behaves very unpredicatable:
 * - weird scrolling behavior
 * - README button opens only for the first time
 * For this reason it made sense to code my own dialog.
 */
export default function ModalLayout(props: PropsWithChildren) {
  const { back } = useRouter();

  function onBack() {
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
          <div className="flex flex-col order-2 pb-8 px-4">{props.children}</div>
          <div className="flex flex-col order-1 sticky top-0">
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
