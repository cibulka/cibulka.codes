import { THEME_LIGHT } from '@/constants/colors';
import { ThemeColor } from '@/context/app/action-types';
import { ErrorView } from '@/modules/error-view';
import { getIntl } from '@/shared/i18n/get-intl';
import { PropsWithLocale } from '@/types/params';

import { messages } from './messages';

function getColor(color: ThemeColor) {
  return THEME_LIGHT[color];
}

// TODO: Move styles to one component
export async function NotFound(props: PropsWithLocale) {
  const { formatMessage } = await getIntl(props.locale);
  return (
    <>
      <style>{`
        :root {
            --action: ${getColor('action')};
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
      <ErrorView
        locale={props.locale}
        title={formatMessage(messages.title)}
        subTitle={formatMessage(messages.subTitle)}
      />
    </>
  );
}
