export const THEME_DARK = {
  // action: '#10b981',
  action: '#10b981',
  background: '#1f2937',
  button: '#475569',
  button_shade: '#030712',
  chip: '#374151',
  chip_dark: '#4b5563',
  chip_dark_2: '#374151',
  outline: '#06b6d4',
  text: '#e7e5e4',
  text_fade: '#a8a29e',
  video: '#ef4444',
} as const;

export const THEME_LIGHT = {
  ...THEME_DARK,
  background: '#f5f5f5',
  button: '#ffffff',
  button_shade: '#a3a3a3',
  chip: '#e5e5e5',
  chip_dark: '#d4d4d4',
  chip_dark_2: '#737373',
  text: '#1e293b',
  text_fade: '#475569',
} as const;
