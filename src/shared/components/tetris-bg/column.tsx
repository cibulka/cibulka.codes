'use client';
import { useEffect, useRef, useState } from 'react';

import { TetrisShape } from './constants';

const HEIGHT = 9;
const WIDTH = 4;

export function TetrisBgColumn(props: { y?: number; shape: TetrisShape }) {
  const [y, setY] = useState(props.y || 0);

  const interval = useRef<NodeJS.Timeout>();
  useEffect(() => {
    interval.current = setInterval(() => {
      setY((old) => {
        const result = old + 1;
        return result > HEIGHT ? 0 : result;
      });
    }, 700);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const coords = props.shape.coords.map((coord) => {
    return coord + y * WIDTH;
  });

  return (
    <div
      className="grid gap-1 h-full"
      style={{ gridTemplateColumns: `repeat(${WIDTH}, 1fr)`, width: '40vw' }}
    >
      {[...Array(WIDTH * HEIGHT)].map((_el, i) => (
        <div
          className="aspect-square"
          style={{ backgroundColor: coords.includes(i) ? props.shape.color : undefined }}
          key={i}
        />
      ))}
    </div>
  );
}
