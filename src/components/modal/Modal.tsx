'use client';
import { PropsWithChildren, useId, useRef } from 'react';

import { Locale } from '@/constants/config';
import { IconX } from '@/icons/IconX';
import { useTranslationClient } from '@/utils/useTranslationClient';

import { useCloseByKeyboard, useFocusTrap, useInitialFocus } from './Modal.utils';

export function Modal(
  props: PropsWithChildren & { locale?: Locale; onClose: () => void; title?: string },
) {
  const { t } = useTranslationClient('common', props.locale);

  const wrapEl = useRef<HTMLDivElement>(null);
  useCloseByKeyboard(props.onClose);
  useFocusTrap(wrapEl);
  useInitialFocus(wrapEl);

  const dialogId = useId();
  const dialogTitleId = useId();

  return (
    <>
      <style>{`
        html, body {
          overflow: hidden;
        }
    `}</style>
      <div
        className={[
          'fixed z-30 top-0 left-0 w-full h-full',
          'flex items-center justify-center',
        ].join(' ')}
        role="dialog"
        id={dialogId}
        aria-labelledby={props.title ? dialogTitleId : undefined}
      >
        <button
          type="button"
          onClick={props.onClose}
          className="absolute inset-0 bg-black opacity-20"
          aria-label={t('modal.close')}
        />
        <div
          aria-hidden="true"
          className={['relative z-10', 'rounded bg-white', 'flex flex-col'].join(' ')}
          style={{ maxWidth: '50em', maxHeight: 'calc(100vh - 4em)', overflow: 'auto' }}
          ref={wrapEl}
        >
          <div className="sticky top-0 flex justify-between gap-4">
            {props.title ? (
              <h1 className="font-bold" id={dialogTitleId}>
                {props.title}
              </h1>
            ) : (
              <div />
            )}
            <button
              type="button"
              className={[
                'float-right',
                'w-8 h-8 p-0.5',
                'text-video',
                'focus:outline-offset-0',
              ].join(' ')}
              onClick={props.onClose}
              aria-label={t('modal.close')}
            >
              <IconX />
            </button>
          </div>
          <div className="pb-8 px-4">{props.children}</div>
        </div>
      </div>
    </>
  );
}
