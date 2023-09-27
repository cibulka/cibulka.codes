import { THEME_LIGHT } from '@/constants/colors';
import { ThemeColor } from '@/context/App.actionTypes';
import { getTranslationServer } from '@/utils/getTranslationServer';

import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { Button } from '@/components/button/Button';
import { BlockContact } from '@/components/block-contact/BlockContact';
import { Locale } from '@/constants/config';

import { IconArrowLeft } from '@/icons/IconArrowLeft';

import styles from './NotFound.module.css';

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
      <div
        className={[
          'absolute inset-0',
          'flex flex-col gap-8 items-center justify-center',
          'bg-background text-text',
          'px-8',
        ].join(' ')}
      >
        <div className="relative aspect-square text-action" style={{ width: '25vmin' }}>
          <IconOnionAlt />
          <span
            className={['absolute inset-0', 'flex items-center justify-center', styles.icon].join(
              ' ',
            )}
            style={{ fontSize: '15vmin' }}
          >
            <span className="flex shake shake-slow shake-constant mt-4">😱</span>
          </span>
        </div>
        <header>
          <h1 className="text-5xl font-bold">{t('404.title')}</h1>
          <h2 className="mt-2 text-2xl">{t('404.subTitle')}</h2>
        </header>
        <Button href="https://www.cibulka.codes">
          <span className="flex items-center gap-2">
            {t('404.back')}
            <span className="w-6 h-6 transform rotate-180 -mr-2">
              <IconArrowLeft />
            </span>
          </span>
        </Button>

        <div className="text-2xl max-w-md text ml-auto mr-auto text-center">
          <p>{t('404.text')}</p>
        </div>
        <BlockContact isCV locale={props.locale} />
      </div>
    </>
  );
}
