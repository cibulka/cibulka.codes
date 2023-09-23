'use client';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { HomeSection } from '@/context/App.types';
import { useAppContext } from '@/context/App.utils';
import { ACTION } from '@/context/App.actionTypes';

export function HomeSection(props: PropsWithChildren & { id: HomeSection; label: string }) {
  const { dispatch } = useAppContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    function handler(entries: IntersectionObserverEntry[]) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        dispatch({ type: ACTION.HOME_SECTION_ACTIVE_ADD, payload: props.id });
      } else {
        dispatch({ type: ACTION.HOME_SECTION_ACTIVE_REMOVE, payload: props.id });
      }
    }

    const observer = new IntersectionObserver(handler);
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [dispatch, props.id]);

  return (
    <section className="relative -mt-4 pt-4" id={props.id} ref={ref}>
      <h2 className="text-xl font-bold mb-4">{props.label}</h2>
      {props.children}
    </section>
  );
}
