'use client';
import { PlausibleGoal } from '@/constants/plausible';
import { IconChevronRight } from '@/icons/IconChevron';
import { Menu as MenuLib } from '@headlessui/react';

import { MenuOptionView } from './components/MenuOptionView';

export type MenuOption<T> = {
  disabled?: boolean;
  plausible?: PlausibleGoal;
  value: T;
  label: string;
};

export function Menu<T>(props: {
  className?: string;
  onChange: (value: T) => void;
  options: MenuOption<T>[];
  placeholder: string;
  value: T | null;
}) {
  const option = props.options.find((opt) => opt.value === props.value);

  return (
    <MenuLib>
      <div className={['relative text-sm', props.className].join(' ')}>
        <MenuLib.Button className="flex gap-1 items-center justify-center w-full">
          <span className="font-semibold border-b-2 border-text_fade">
            {option ? option.label : props.placeholder}
          </span>
          <span className="transform rotate-90 w-6 h-6 -mr-1">
            <IconChevronRight />
          </span>
        </MenuLib.Button>
        <MenuLib.Items className="absolute top-full bg-button shadow-md -ml-4 mt-2">
          {props.options.map((option, i) => (
            <MenuLib.Item key={i} disabled={option.disabled}>
              {({ active }) => (
                <MenuOptionView
                  active={active}
                  isSelected={option.value === props.value}
                  onChange={props.onChange}
                  option={option}
                />
              )}
            </MenuLib.Item>
          ))}
        </MenuLib.Items>
      </div>
    </MenuLib>
  );
}
