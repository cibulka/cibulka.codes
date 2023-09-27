import { ErrorView } from '@/components/error-view/ErrorView';
import { THEME_LIGHT } from '@/constants/colors';
import { Locale } from '@/constants/config';
import { ThemeColor } from '@/context/App.actionTypes';
import { getTranslationServer } from '@/utils/getTranslationServer';

function getColor(color: ThemeColor) {
  return THEME_LIGHT[color];
}

export async function NotFound(props: { locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
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
      <ErrorView locale={props.locale} title={t('404.title')} subTitle={t('404.subTitle')} />
    </>
  );
}
