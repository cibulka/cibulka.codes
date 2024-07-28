import { FinishedButtonRoot } from './button-root';
import { FinishedButtonProps } from './types';

export function FinishedButton(props: FinishedButtonProps) {
  return (
    <FinishedButtonRoot
      href={props.href}
      onClick={props.onClick}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <span className="w-20 h-20">{props.icon}</span>
      <div className="text-xl font-bold">{props.label}</div>
    </FinishedButtonRoot>
  );
}
