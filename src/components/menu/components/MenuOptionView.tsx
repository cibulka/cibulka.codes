import { IconCheck } from '@/icons/IconCheck';
import { IconHourGlass } from '@/icons/IconHourGlass';
import { usePlausibleEvent } from '@/utils/plausible';

import { MenuOption } from '../Menu';

export function MenuOptionView<T>(props: {
  active: boolean;
  isSelected: boolean;
  onChange: (value: T) => void;
  option: MenuOption<T>;
}) {
  const onChangePlausible = usePlausibleEvent(props.option.plausible);

  return (
    <button
      className={[
        'flex items-center gap-12 w-full',
        'py-2 px-4',
        props.active && 'bg-chip_dark',
        props.option.disabled && 'opacity-50 cursor-not-allowed',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={props.option.disabled}
      onClick={() => {
        props.onChange(props.option.value);
        if (onChangePlausible) onChangePlausible();
      }}
      type="button"
    >
      <span className="flex justify-start flex-1">{props.option.label}</span>
      {props.isSelected && (
        <span className="w-6 h-6">
          <IconCheck />
        </span>
      )}
      {props.option.disabled && (
        <span className="w-6 h-6">
          <IconHourGlass />
        </span>
      )}
    </button>
  );
}
