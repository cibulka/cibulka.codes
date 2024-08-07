'use client';

import NextImage from 'next/image';
import { useIntl } from 'react-intl';

import { ThemeMode } from '@/constants/ui';
import { useLightMode } from '@/context/app/hooks';
import { IconPlay } from '@/icons/IconPlay';

import { useVideoContext } from './context';
import { posterAltMessage, videoControlMessages } from './messages';

export function VideoPoster(props: { src: string; title: string }) {
  const Image = props.src.startsWith('/') ? NextImage : 'img';

  const { showVideo } = useVideoContext();
  const { formatMessage } = useIntl();
  const mode = useLightMode();

  return (
    <>
      <Image fill src={props.src} alt={formatMessage(posterAltMessage)} className="object-cover" />
      {showVideo && (
        <button
          type="button"
          className={[
            'absolute top-0 left-0 w-full h-full',
            'flex items-center justify-center',
          ].join(' ')}
          onClick={showVideo}
          aria-label={formatMessage(videoControlMessages.play.on)}
        >
          <span
            className={[
              'w-24 h-24 smMax:w-20 smMax:h-20 xsMax:w-16 xsMax:h-16',
              mode === ThemeMode.DARK ? 'text-chip' : 'text-text_fade',
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
