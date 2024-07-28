import { ReactNode } from 'react';
import { IThumbProps, ITrackProps } from 'react-range/lib/types';

import { TrackLine } from './track-line';

export function renderThumb({ props }: { props: IThumbProps }) {
  return (
    <div
      {...props}
      className={['w-6 h-6 flex items-center justify-center'].join(' ')}
      key={props.key}
      style={props.style}
    >
      <div className="w-3 h-3 rounded-full bg-chip" />
    </div>
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
    <div {...props} className="relative flex items-center h-6" style={props.style}>
      <TrackLine className="bg-neutral-500" />
      <TrackLine className="bg-neutral-300" scale={loaded} />
      <TrackLine className="bg-neutral-100" scale={played} />
      {children}
    </div>
  );
}
