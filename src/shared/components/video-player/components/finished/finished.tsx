'use client';

import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { IconCV } from '@/icons/IconCV';
import { IconReplay } from '@/icons/IconReplay';
import { viewResumeMessage } from '@/shared/messages';

import { URLS } from '@/constants/url';
import { useVideoContext } from '../../context';
import { replayMessage } from '../../messages';
import { FinishedButton } from './button';

export function VideoFinished() {
  const [isRendered, setIsRendered] = useState(false);
  const intl = useIntl();
  const { actions } = useVideoContext();

  useEffect(() => setIsRendered(true), []);

  return (
    <div
      className={[
        'absolute top-0 left-0 w-full h-full',
        'grid grid-cols-2',
        'bg-black text-white',
        isRendered ? 'opacity-100' : 'opacity-0',
        'transition-opacity duration-500',
      ].join(' ')}
    >
      <FinishedButton
        icon={<IconReplay />}
        label={intl.formatMessage(replayMessage)}
        onClick={actions?.replay}
      />
      <FinishedButton
        icon={<IconCV />}
        label={intl.formatMessage(viewResumeMessage)}
        href={URLS.CV}
      />
    </div>
  );
}
