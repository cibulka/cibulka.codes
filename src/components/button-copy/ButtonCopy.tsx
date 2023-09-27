'use client';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { STATE, State } from '@/constants/state';
import { IconCopy } from '@/icons/IconCopy';
import { IconCheck } from '@/icons/IconCheck';
import { IconError } from '@/icons/IconError';

export function ButtonCopy(
  props: PropsWithChildren & {
    className?: string;
    label: string;
    onFailure?: () => void;
    onSuccess?: () => void;
    value: string;
  },
) {
  const [state, setState] = useState<State>(STATE.IDLE);

  function onCopy() {
    try {
      navigator.clipboard.writeText(props.value);
      setState(STATE.SUCCESS);
      if (props.onSuccess) props.onSuccess();
    } catch (e) {
      setState(STATE.FAILURE);
      if (props.onFailure) props.onFailure();
    }
  }

  const timeout = useRef<NodeJS.Timeout>();
  const isReset = state === STATE.FAILURE || state === STATE.SUCCESS;
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    if (isReset) {
      timeout.current = setTimeout(() => setState(STATE.IDLE), 1000);
    }
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [isReset]);

  return (
    <button type="button" className={props.className} aria-label={props.label} onClick={onCopy}>
      {props.children || (
        <>
          {(state === STATE.IDLE || state === STATE.LOADING) && <IconCopy />}
          {state === STATE.FAILURE && <IconError />}
          {state === STATE.SUCCESS && <IconCheck />}
        </>
      )}
    </button>
  );
}
