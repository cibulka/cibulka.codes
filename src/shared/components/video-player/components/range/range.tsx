'use client';

import { useCallback } from 'react';
import { Range } from 'react-range';
import { IRenderTrackParams } from 'react-range/lib/types';

import { useVideoContext } from '../../context';

import { renderThumb, renderTrack as renderTrackEnhanced } from './render';

export function TimeRange() {
  const { actions, currentTime, duration, loaded, played } = useVideoContext();

  const onChange = useCallback((values: number[]) => actions?.setCurrentTime(values[0]), [actions]);

  const renderTrack = useCallback(
    ({ props, children }: IRenderTrackParams) =>
      renderTrackEnhanced({ props, children, loaded, played }),
    [loaded, played],
  );

  return (
    <div className="px-2">
      <Range
        min={0}
        max={duration || undefined}
        onChange={onChange}
        step={1}
        values={[currentTime]}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
    </div>
  );
}
