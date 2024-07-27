'use client';
import { MenuButton, MenuItem, MenuItems, Menu as MenuWrapper } from '@headlessui/react';

import { IconChevronRight } from '@/icons/IconChevron';

import { MenuOptionView } from './option';
import { MenuOption } from './types';

export function Menu<T>(props: {
  className?: string;
  onChange: (value: T) => void;
  options: MenuOption<T>[];
  placeholder: string;
  value: T | null;
}) {
  const option = props.options.find((opt) => opt.value === props.value);

  return (
    <MenuWrapper>
      <div className={['relative text-sm', props.className].join(' ')}>
        <MenuButton className="flex items-center justify-between w-full">
          <span className="font-semibold border-b-2 border-text_fade">
            {option ? option.label : props.placeholder}
          </span>
          <span className="transform rotate-90 w-6 h-6">
            <IconChevronRight />
          </span>
        </MenuButton>
        <MenuItems className="absolute top-full bg-button shadow-md -ml-4 mt-2">
          {props.options.map((option, i) => (
            <MenuItem key={i} disabled={option.disabled}>
              {({ active }) => (
                <MenuOptionView
                  active={active}
                  isSelected={option.value === props.value}
                  onChange={props.onChange}
                  option={option}
                />
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </MenuWrapper>
  );
}
