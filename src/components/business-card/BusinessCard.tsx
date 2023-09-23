import NextImage from 'next/image';

import { ButtonCV } from '@/components/button-cv/ButtonCv';
import { ChipAvailability } from '@/components/chip-availability/ChipAvailability';
import { ChipLocation } from '@/components/chip-location/ChipLocation';
import { ContactEmail } from '@/components/contact-email/ContactEmail';
import { ContactPhone } from '@/components/contact-phone/ContactPhone';
import { MdxReader } from '@/components/mdx-reader/MdxReader';
import { Name } from '@/components/name/Name';
import { Locale } from '@/constants/config';
import { getDocuments } from '@/content/getDocuments';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function BusinessCard(props: { locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  const intro = getDocuments(['Block'], props.locale).find((b) => b.slug === 'intro-1');
  return (
    <div
      className={['lg:grid lg:gap-4', 'flex flex-col gap-8', 'gap-4', 'max-w-xl'].join(' ')}
      style={{ gridTemplateColumns: '2fr 3fr' }}
    >
      <header className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 overflow-hidden border border-button_shade rounded-md">
          <NextImage
            src="/petr.jpg"
            fill
            alt="Photo"
            className="absolute top-0 left-0 object-cover"
            sizes="6em"
          />
        </div>
        <Name className="text-2xl mt-3 mb-3" classNameIcon="w-6 h-6 mt-2" locale={props.locale} />
        <div className="flex">
          <ButtonCV locale={props.locale} isSmall />
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <article>
          {intro && (
            <div className="mb-4 max-w-xs">
              <MdxReader locale={props.locale} mdx={intro.body.code} />
            </div>
          )}
          <div className="flex gap-2">
            <ChipLocation locale={props.locale} />
            <ChipAvailability locale={props.locale} />
          </div>
        </article>
        <article>
          <h2 className="text-lg font-semibold mb-2">{t('contactMe.button')}</h2>
          <div className="flex">
            <ul className="text-sm flex flex-col gap-2">
              <li>
                <ContactEmail />
              </li>
              <li>
                <ContactPhone />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
