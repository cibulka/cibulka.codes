'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export function Modal(props: PropsWithChildren<{ onClose: () => void; open: boolean }>) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      className="fixed z-50 top-0 left-0 w-full h-full"
    >
      <div
        className={[
          'fixed top-0 left-0 w-full h-full',
          'flex items-center justify-center',
          'bg-black opacity-50',
        ].join(' ')}
      />
      <div className="relative z-10 flex w-full h-full items-center justify-center">
        <DialogPanel
          className="bg-white p-4 min-w-min overflow-auto"
          style={{ maxHeight: 'calc(100vh - 2em)', maxWidth: 'calc(100vw - 2em)' }}
        >
          {props.children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
