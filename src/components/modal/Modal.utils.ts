import { RefObject, useEffect } from 'react';

import { FOCUSABLE_SELECTOR } from './Modal.constants';

export function useInitialFocus(contentEl: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!contentEl.current) return;
    const focusableEls = contentEl.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const focusableEl = focusableEls[1] || focusableEls[0];
    focusableEl?.focus();
  }, [contentEl]);
}

function useKeyboardEvent(handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [handler]);
}

export function useFocusTrap(contentEl: RefObject<HTMLElement>) {
  const focusableEls = contentEl.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
  const focusableElFirst = focusableEls ? focusableEls[0] : undefined;
  const focusableElLast = focusableEls ? focusableEls[focusableEls.length - 1] : undefined;

  useKeyboardEvent((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Tab':
        if (e.shiftKey && document.activeElement === focusableElFirst) {
          e.preventDefault();
          focusableElLast?.focus();
        } else if (!e.shiftKey && document.activeElement === focusableElLast) {
          e.preventDefault();
          focusableElFirst?.focus();
        }
      default:
        break;
    }
  });
}

export function useCloseByKeyboard(onClose: () => void) {
  useKeyboardEvent((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  });
}
