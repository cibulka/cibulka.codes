import NextImage from 'next/image';

import { CONTACT, Locale } from '@/constants/config';
import { IconCV } from '@/icons/IconCV';
import { IconEmail } from '@/icons/IconEmail';
import { IconPhone } from '@/icons/IconPhone';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function BlockContactBar(props: { className: string; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <div className={[props.className, 'mt-8 py-2 bg-background border-t'].join(' ')}>
      <div className="relative z-10 flex justify-between w-full">
        <a href="/hire-me" className="flex flex-col items-center justify-center flex-1">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-chip_shade">
            <NextImage
              src="/petr.jpg"
              fill
              alt="Photo"
              className="absolute top-0 left-0 object-cover"
              sizes="3em"
            />
          </div>
        </a>
        <a
          href={`mailto:${CONTACT.EMAIL}`}
          className="flex flex-col items-center justify-center flex-1"
        >
          <span className="w-8 h-8 text-text_fade">
            <IconEmail />
          </span>
          <span>{t('bar.email')}</span>
        </a>
        <a
          href={`call:${CONTACT.PHONE}`}
          className="flex flex-col items-center justify-center flex-1"
        >
          <span className="w-8 h-8 text-text_fade">
            <IconPhone />
          </span>
          <span>{t('bar.phone')}</span>
        </a>
        <a
          href={`/${props.locale}/cv.pdf`}
          className="flex flex-col items-center justify-center flex-1"
        >
          <span className="w-8 h-8 text-text_fade">
            <IconCV />
          </span>
          <span>{t('bar.cv')}</span>
        </a>
      </div>
    </div>
  );
}
