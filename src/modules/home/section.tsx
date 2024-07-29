'use client';
import { HomeSectionId } from '@/constants/config';
import { AppActionType } from '@/context/app/action-types';
import { useAppContext } from '@/context/app/hooks';

import { PropsWithChildren, useEffect, useRef } from 'react';

export function HomeSection(props: PropsWithChildren & { id: HomeSectionId; label: string }) {
  const { dispatch } = useAppContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    function handler(entries: IntersectionObserverEntry[]) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        dispatch?.({ type: AppActionType.HOME_SECTION_ACTIVE_ADD, payload: props.id });
      } else {
        dispatch?.({ type: AppActionType.HOME_SECTION_ACTIVE_REMOVE, payload: props.id });
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
