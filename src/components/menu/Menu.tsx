'use client';
import { IconCheck } from '@/icons/IconCheck';
import { IconChevronRight } from '@/icons/IconChevron';
import { IconHourGlass } from '@/icons/IconHourGlass';
import { Menu as MenuLib } from '@headlessui/react';

export type MenuOption<T> = {
  disabled?: boolean;
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
                <button
                  className={[
                    'flex items-center gap-12 w-full',
                    'py-2 px-4',
                    active && 'bg-chip_dark',
                    option.disabled && 'opacity-50 cursor-not-allowed',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  disabled={option.disabled}
                  onClick={() => props.onChange(option.value)}
                  type="button"
                >
                  <span className="flex justify-start flex-1">{option.label}</span>
                  {option.value === props.value && (
                    <span className="w-6 h-6">
                      <IconCheck />
                    </span>
                  )}
                  {option.disabled && (
                    <span className="w-6 h-6">
                      <IconHourGlass />
                    </span>
                  )}
                </button>
              )}
            </MenuLib.Item>
          ))}
        </MenuLib.Items>
      </div>
    </MenuLib>
  );
}
