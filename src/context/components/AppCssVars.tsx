'use client';
import { useGetColor } from '../App.utils';

export function AppCssVars() {
  const getColor = useGetColor();

  return (
    <style>{`
        :root {
            --action: ${getColor('action')};
            --background: ${getColor('background')};
            --button:${getColor('button')};
            --button_shade:${getColor('button_shade')};
            --chip: ${getColor('chip')};
            --chip_dark: ${getColor('chip_dark')};
            --chip_dark_2: ${getColor('chip_dark_2')};
            --outline: ${getColor('outline')};
            --text: ${getColor('text')};
            --text_fade: ${getColor('text_fade')};
            --video: ${getColor('video')};
          }
    `}</style>
  );
}
