import { BlockContact } from '@/components/block-contact/BlockContact';
import { Button } from '@/components/button/Button';
import { Locale } from '@/constants/config';
import { IconArrowLeft } from '@/icons/IconArrowLeft';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { getTranslationServer } from '@/utils/getTranslationServer';

import styles from './ErrorView.module.css';

export async function ErrorView(props: { locale: Locale; title?: string; subTitle?: string }) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <div className={['flex flex-col gap-8 items-center justify-center', 'px-8'].join(' ')}>
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
        <h1 className="text-5xl font-bold">{props.title || t('error.title')}</h1>
        {props.subTitle && <h2 className="mt-2 text-2xl">{props.subTitle}</h2>}
      </header>
      <Button href="https://www.cibulka.codes" locale={props.locale}>
        <span className="flex items-center gap-2">
          {t('error.back')}
          <span className="w-6 h-6 transform rotate-180 -mr-2">
            <IconArrowLeft />
          </span>
        </span>
      </Button>

      <div className="text-2xl max-w-md text ml-auto mr-auto text-center">
        <p>{t('error.contact')}</p>
      </div>
      <BlockContact isCV locale={props.locale} />
    </div>
  );
}
