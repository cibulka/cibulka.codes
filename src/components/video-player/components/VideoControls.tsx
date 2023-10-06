import { useEffect, useState } from 'react';

import { IconPause } from '@/icons/IconPause';
import { IconPlay } from '@/icons/IconPlay';
import { IconPlayMini } from '@/icons/IconPlayMini';

import styles from './VideoControls.module.css';
import { IconVolumeOn } from '@/icons/IconVolumeOn';
import { IconVolumeOff } from '@/icons/IconVolumeOff';

import { VideoPlayerLabels } from '../VideoPlayer';
import { useAppContext } from '@/context/App.utils';
import { THEME_MODE } from '@/constants/config';

function numberToTime(s: number) {
  const minutes = Math.floor(s / 60);
  const seconds = s % 60;
  return [minutes, seconds].map((num) => num.toString().padStart(2, '0')).join(':');
}

export function VideoControls(props: {
  duration?: number;
  isFinished: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  isRendered: boolean;
  labels: VideoPlayerLabels;
  onToggleMute: () => void;
  onTogglePlay: () => void;
  time: number;
}) {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);
  const context = useAppContext();
  const isDark = context.state.theme.selected === THEME_MODE.DARK;

  useEffect(() => {
    function handler() {
      setIsButtonInvisible(false);
    }

    window.removeEventListener('mousemove', handler);
    if (props.isPlaying) {
      setIsButtonInvisible(true);
      window.addEventListener('mousemove', handler);
    }

    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, [props.isPlaying]);

  return (
    <>
      <div className={[styles.bg, 'absolute bottom-0 left-0', 'w-full'].join(' ')} />
      {!props.isFinished && (
        <button
          type="button"
          className={[
            'absolute top-0 left-0 w-full h-full',
            'flex items-center justify-center',
            'transition-opacity',
            props.isPlaying ? 'opacity-0' : 'opacity-100',
            !isButtonInvisible && 'hover:opacity-100',
            styles['overlay'],
            'has-focusable',
          ].join(' ')}
          disabled={!props.isRendered}
          onClick={() => props.onTogglePlay()}
          aria-label={props.isPlaying ? props.labels.pause : props.labels.play}
        >
          <span
            className={[
              'w-24 h-24 smMax:w-20 smMax:h-20 xsMax:w-16 xsMax:h-16',
              isDark ? 'text-chip' : 'text-text_fade',
              'focusable',
            ].join(' ')}
          >
            {props.isPlaying ? <IconPause /> : <IconPlay />}
          </span>
        </button>
      )}
      <div className="absolute bottom-0 left-0 w-full  text-white py-2">
        <div className="flex justify-between gap-2 px-2 items-center">
          <button
            type="button"
            className="w-12 h-12 p-1 text-white"
            disabled={!props.isRendered}
            onClick={() => props.onTogglePlay()}
            aria-label={props.isPlaying ? props.labels.pause : props.labels.play}
          >
            {props.isPlaying ? <IconPause /> : <IconPlayMini />}
          </button>
          {props.duration && (
            <label className="flex flex-1">
              <span className="mr-2">{numberToTime(props.duration - props.time)}</span>
              <input
                className="flex-1"
                disabled
                type="range"
                min={0}
                max={props.duration}
                readOnly
                value={props.time}
                step={1}
              />
            </label>
          )}
          <button
            type="button"
            onClick={() => props.onToggleMute()}
            className="w-12 h-12 p-1"
            disabled={!props.isRendered}
            aria-label={props.isMuted ? props.labels.volumeOn : props.labels.volumeOff}
          >
            {props.isMuted ? <IconVolumeOn /> : <IconVolumeOff />}
          </button>
        </div>
      </div>
    </>
  );
}
