import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.mdx'],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
      borderWidth: {
        '0.5': '0.5px',
        '2.5': '2.5px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      colors: {
        action: `var(--action)`,
        background: `var(--background)`,
        button: `var(--button)`,
        button_shade: `var(--button_shade)`,
        chip: `var(--chip)`,
        chip_light: `var(--chip_light)`,
        chip_dark: `var(--chip_dark)`,
        chip_dark_2: `var(--chip_dark_2)`,
        outline: `var(--outline)`,
        paper: `var(--paper)`,
        text: `var(--text)`,
        text_fade: `var(--text_fade)`,
        video: `var(--video)`,
      },
      screens: {
        xxs: '380px',
        xxsMax: { max: '379px' },
        xs: '540px',
        xsMax: { max: '540px' },
        sm: '640px',
        smMax: { max: '639px' },
        md: '768px',
        mdMax: { max: '767px' },
        bg: '962px',
        bgMax: { max: '961px' },
        lg: '1024px',
        lgMax: { max: '1023px' },
        lx: '1180px',
        lxMax: { max: '1179px' },
        xl: '1280px',
        xlMax: { max: '1279px' },
        ['2xl']: '1400px',
        ['2xlMax']: { max: '1399px' },
      },
    },
  },
  plugins: [],
};
export default config;
