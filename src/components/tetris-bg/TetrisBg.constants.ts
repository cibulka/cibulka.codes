export const TETRIS_SHAPES = [
  {
    coords: [1, 5, 6, 7],
    color: '#f97316',
  },
  {
    coords: [3, 5, 6, 7],
    color: '#14b8a6',
  },
  {
    coords: [1, 2, 5, 6],
    color: '#0ea5e9',
  },
  {
    coords: [2, 3, 5, 6],
    color: '#8b5cf6',
  },
  {
    coords: [1, 2, 3, 6],
    color: '#ec4899',
  },
  {
    coords: [1, 2, 6, 7],
    color: '#eab308',
  },
] as const;

export type TetrisShape = (typeof TETRIS_SHAPES)[number];
