import { THEME_LIGHT } from '@/constants/colors';
import { ThemeColor } from '@/context/App.actionTypes';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

import { NotFoundIcon } from './components/NotFoundIcon';

function getColor(color: ThemeColor) {
  return THEME_LIGHT[color];
}

export async function NotFound(props: { href: string | null; locale: string }) {
  const locale = isLocale(props.locale) ? props.locale : 'en';
  const { t } = await getTranslationServer('common', locale);
  return (
    <>
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
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center px-8">
        <NotFoundIcon />
      </div>
    </>
  );
}
