'use client';
import { useRouter } from 'next/navigation';

import { Locale } from '@/constants/config';
import { URLS } from '@/constants/url';
import { IconBriefcase } from '@/icons/IconBriefcase';
import { IconReplay } from '@/icons/IconReplay';
import { getLocalizedHref } from '@/utils/url';

import { VideoPlayerLabels } from '../VideoPlayer';

import styles from './VideoFinished.module.css';

export function VideoFinished(props: {
  labels: VideoPlayerLabels;
  locale: Locale;
  onReplay: () => void;
}) {
  const { push } = useRouter();
  const hireMeUrl = getLocalizedHref(URLS.HIRE_ME, props.locale);

  return (
    <div
      className={[
        'absolute z-10 inset-0',
        'flex bg-text text-background',
        'transition-opacity duration-1000',
        styles['anim-opaque'],
      ].join(' ')}
    >
      <div className="flex items-center justify-center flex-1">
        <div className={styles['anim-toTop']}>
          <button
            className={[
              'flex flex-col items-center',
              'transition-transform scale-100 hover:scale-125 focus:scale-125',
            ].join(' ')}
            onClick={() => props.onReplay()}
            type="button"
          >
            <span className="w-20 h-20">
              <IconReplay />
            </span>
            <span className="mt-2 font-semibold">{props.labels.replay}</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className={styles['anim-toBottom']}>
          <button
            className={[
              'flex flex-col items-center',
              'transition-transform scale-100 hover:scale-125 focus:scale-125',
            ].join(' ')}
            onClick={() => push(hireMeUrl)}
            type="button"
          >
            <span className="w-20 h-20">
              <IconBriefcase />
            </span>
            <span className="mt-2 font-semibold">{props.labels.hireMe}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
