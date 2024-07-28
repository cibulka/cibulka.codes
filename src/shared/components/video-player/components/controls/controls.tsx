'use client';

import { useIntl } from 'react-intl';

import { Spinner } from '@/shared/components/spinner';

import { useVideoContext } from '../../context';
import { emptyTimeMessage, timeMessage } from '../../messages';
import { TimeRange } from '../range';

import styles from './controls.module.css';
import { useControlLabels } from './use-control-labels';
import { useControlsVisibility } from './use-controls-visibility';

function secondsToTimeString(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);

  return [hours || null, minutes, secondsLeft]
    .filter((value) => typeof value === 'number')
    .map((value) => value.toString().padStart(2, '0'))
    .join(':');
}

export function VideoControls() {
  const intl = useIntl();

  const { actions, duration, currentTime, isLoading } = useVideoContext();
  const { fullScreenLabel, muteLabel, playLabel } = useControlLabels();
  const { isVisible, ref } = useControlsVisibility();

  return (
    <div
      className={[
        'absolute top-0 left-0 w-full h-full',
        'flex flex-col',
        isVisible ? 'opacity-100' : 'opacity-0',
        'transition-opacity text-white',
      ].join(' ')}
      ref={ref}
    >
      <div
        className={['flex items-center justify-center', 'flex-1 focusable cursor-pointer'].join(
          ' ',
        )}
        onClick={isLoading ? undefined : actions?.togglePlay}
      >
        {isLoading && <Spinner className="mt-20 text-action" />}
      </div>
      <div className="relative p-4">
        <div className={styles.controls_bg} />
        <div className="flex flex-col gap-2 relative z-1">
          <div className="flex gap-4 justify-between">
            <div className="flex items-center gap-4">
              <button
                className="w-6 h-6"
                type="button"
                onClick={actions?.togglePlay}
                aria-label={playLabel.label}
              >
                {playLabel.icon}
              </button>
              <div className="text-sm">
                {intl.formatMessage(timeMessage, {
                  currentTime: secondsToTimeString(currentTime),
                  duration: duration
                    ? secondsToTimeString(duration)
                    : intl.formatMessage(emptyTimeMessage),
                })}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="w-6 h-6"
                type="button"
                onClick={actions?.toggleMute}
                aria-label={muteLabel.label}
              >
                {muteLabel.icon}
              </button>
              <button
                type="button"
                onClick={actions?.toggleFullScreen}
                aria-label={fullScreenLabel.label}
                className="w-6 h-6"
              >
                {fullScreenLabel.icon}
              </button>
            </div>
          </div>
          <TimeRange />
        </div>
      </div>
    </div>
  );
}
