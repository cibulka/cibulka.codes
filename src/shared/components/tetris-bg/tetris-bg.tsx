'use client';

import { useEffect, useState } from 'react';

import { TetrisBgColumn } from './column';
import { TETRIS_SHAPES } from './constants';

export function TetrisBg() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex gap-1 bg-button opacity-50">
      {isRendered && (
        <>
          <TetrisBgColumn shape={TETRIS_SHAPES[0]} y={4} />
          <TetrisBgColumn shape={TETRIS_SHAPES[1]} y={2} />
          <TetrisBgColumn shape={TETRIS_SHAPES[2]} y={0} />
          <TetrisBgColumn shape={TETRIS_SHAPES[3]} y={6} />
        </>
      )}
      <svg
        viewBox="0 0 600 354"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-40"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
