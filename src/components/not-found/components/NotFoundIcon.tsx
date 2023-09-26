'use client';
import 'csshake/dist/csshake.css';

import { Button } from '@/components/button/Button';
import { ContactEmail } from '@/components/contact-email/ContactEmail';
import { IconArrowLeft } from '@/icons/IconArrowLeft';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { useLocale } from '@/utils/useLocale';
import { useTranslationClient } from '@/utils/useTranslationClient';

import styles from './NotFoundIcon.module.css';

export function NotFoundIcon() {
  const locale = useLocale();
  const { t } = useTranslationClient('common', locale);
  return (
    <>
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
      <div className="flex flex-col items-center gap-2">
        <div className="text ml-auto mr-auto text-center" style={{ maxWidth: '18em' }}>
          <p>{t('404.text')}</p>
        </div>
        <ContactEmail />
      </div>
    </>
  );
}
