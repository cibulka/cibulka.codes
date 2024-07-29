import { Block } from 'contentlayer/generated';

import { MenuLocale } from '@/shared/components/menu-locale';
import { ThemeSwitch } from '@/shared/components/theme-switch';
import { getIntl } from '@/shared/i18n/get-intl';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { PropsWithLocale } from '@/types/params';

import { URLS } from '@/constants/url';
import { IconCV } from '@/icons/IconCV';
import { IconDownload } from '@/icons/IconDownload';
import { ButtonBig } from '@/shared/components/button-big';
import { ChipAvailability } from '@/shared/components/chip-availability';
import { ChipLocation } from '@/shared/components/chip-location';
import { ContactPhone } from '@/shared/components/contact';
import { MdxReader } from '@/shared/mdx-reader';
import { downloadResumeMessage } from '@/shared/messages';
import { darkModeMessages, headerMessages } from './messages';

export async function HomePageHeader({ locale }: PropsWithLocale) {
  const { formatMessage } = await getIntl(locale);

  const blocks = getDocuments(['Block'], locale) as Block[];
  const intro_1 = blocks.find((b) => b.slug === 'intro-1');
  const intro_2 = blocks.find((b) => b.slug === 'intro-2');

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="w-20">
            <MenuLocale locale={locale} />
          </div>
          <ChipLocation locale={locale} />
          <div className="flex justify-end w-20">
            <ThemeSwitch
              labels={{
                dark: formatMessage(darkModeMessages.dark),
                light: formatMessage(darkModeMessages.light),
              }}
            />
          </div>
        </div>
        {intro_1 && intro_2 && (
          <div className="text md:text-xl md:leading-normal">
            <MdxReader locale={locale} mdx={intro_1.body.code} />
            <MdxReader locale={locale} mdx={intro_2.body.code} />
          </div>
        )}
        <div className="-mt-2 mb-6">
          <ChipAvailability locale={locale} />
        </div>
      </div>
      <div
        className={[
          'md:sticky md:top-0 md:z-10',
          'p-4 -mt-12 -mb-4 -ml-4 -mr-4 bg-background',
          'flex flex-col gap-8',
          'md:grid md:grid-cols-2',
        ].join(' ')}
      >
        <div>
          <div className="flex gap-2 items-center mb-4">
            <IconCV className="text-action w-6 h-6 sm:-ml-8" />
            <h2 className="text-xl font-bold">{formatMessage(headerMessages.resume)}</h2>
          </div>
          <ButtonBig
            className="-ml-2 -mr-2"
            href={`/${locale}/${URLS.CV_PDF}`}
            label={formatMessage(downloadResumeMessage)}
            icon={<IconDownload />}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">{formatMessage(headerMessages.contactMe)}</h2>
          <ContactPhone locale={locale} />
        </div>
      </div>
    </>
  );
}
