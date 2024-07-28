import { ReactNode } from 'react';
import { IThumbProps, ITrackProps } from 'react-range/lib/types';

import { TrackLine } from './track-line';

export function renderThumb({ props }: { props: IThumbProps }) {
  return (
    <div
      {...props}
      className={['w-4 h-4', 'rounded-full bg-chip'].join(' ')}
      key={props.key}
      style={props.style}
    />
  );
}

export function renderTrack({
  props,
  children,
  loaded,
  played,
}: {
  children: ReactNode;
  props: ITrackProps;
  loaded: number;
  played: number;
}) {
  return (
    <div {...props} className="relative flex items-center h-4" style={props.style}>
      <TrackLine className="bg-neutral-500" />
      <TrackLine className="bg-neutral-300" scale={loaded} />
      <TrackLine className="bg-neutral-100" scale={played} />
      {children}
    </div>
  );
}
