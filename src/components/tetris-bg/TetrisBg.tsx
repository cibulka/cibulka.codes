'use client';

import { useEffect, useState } from 'react';
import { TETRIS_SHAPES } from './TetrisBg.constants';
import { TetrisBgColumn } from './components/TetrisBgColumn';

export function TetrisBg() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full flex gap-1 bg-text">
      {isRendered && (
        <>
          <TetrisBgColumn shape={TETRIS_SHAPES[0]} y={4} />
          <TetrisBgColumn shape={TETRIS_SHAPES[1]} y={2} />
          <TetrisBgColumn shape={TETRIS_SHAPES[2]} y={0} />
          <TetrisBgColumn shape={TETRIS_SHAPES[3]} y={6} />
        </>
      )}
    </div>
  );
}
