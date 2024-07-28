import { ReactNode } from 'react';

export type FinishedButtonProps = {
  onClick?: () => void;
  href?: string;
  icon: ReactNode;
  label: string;
};
