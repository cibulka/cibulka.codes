'use client';

import NextImage from 'next/image';

import { ThemeMode } from '@/constants/config';
import { useAppContext } from '@/context/app/hooks';
import { IconPlay } from '@/icons/IconPlay';

import { useIntl } from 'react-intl';
import { useVideoContext } from './context';
import { videoControlMessages } from './messages';

export function VideoPoster(props: { alt: string; src: string }) {
  const Image = props.src.startsWith('/') ? NextImage : 'img';

  const { state } = useAppContext();
  const { showVideo } = useVideoContext();
  const intl = useIntl();

  return (
    <>
      <Image fill src={props.src} alt={props.alt} className="object-cover" />
      {showVideo && (
        <button
          type="button"
          className={[
            'absolute top-0 left-0 w-full h-full',
            'flex items-center justify-center',
          ].join(' ')}
          onClick={showVideo}
          aria-label={intl.formatMessage(videoControlMessages.play.on)}
        >
          <span
            className={[
              'w-24 h-24 smMax:w-20 smMax:h-20 xsMax:w-16 xsMax:h-16',
              state.theme === ThemeMode.DARK ? 'text-chip' : 'text-text_fade',
              'focusable',
            ].join(' ')}
          >
            <IconPlay />
          </span>
        </button>
      )}
    </>
  );
}
