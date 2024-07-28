'use client';
import { useGetColor } from './hooks';

export function AppCssVars() {
  const getColor = useGetColor();

  return (
    // eslint-disable-next-line formatjs/no-literal-string-in-jsx
    <style>{`
        :root {
            --action: ${getColor('action')};
            --action_light: ${getColor('action_light')};
            --background: ${getColor('background')};
            --button:${getColor('button')};
            --button_shade:${getColor('button_shade')};
            --chip_light: ${getColor('chip_light')};
            --chip: ${getColor('chip')};
            --chip_dark: ${getColor('chip_dark')};
            --chip_dark_2: ${getColor('chip_dark_2')};
            --outline: ${getColor('outline')};
            --paper: ${getColor('paper')};
            --text: ${getColor('text')};
            --text_fade: ${getColor('text_fade')};
            --video: ${getColor('video')};
          }
    `}</style>
  );
}
