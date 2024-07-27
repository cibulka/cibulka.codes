import { PlausibleGoal } from '@/constants/plausible';

export type MenuOption<T> = {
  disabled?: boolean;
  plausible?: PlausibleGoal;
  value: T;
  label: string;
};
