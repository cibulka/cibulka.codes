import Image from 'next/image';

import { Chip, ChipVariant } from '@/shared/components/chip';
import { Name } from '@/shared/components/name';
import { getIntl } from '@/shared/i18n/get-intl';
import { metaMessages } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';
import { getAvailabilityStr } from '@/utils/get-availability';

export async function HireMeHeader({ locale }: PropsWithLocale) {
  const { formatMessage } = await getIntl(locale);
  const availability = await getAvailabilityStr(locale);
  return (
    <header className={['flex flex-col gap-4', 'md:flex-row md:gap-8'].join(' ')}>
      <div className="relative w-40 aspect-square bg-neutral-200">
        <Image
          src="/petr.jpg"
          fill
          alt="Photo"
          className="absolute top-0 left-0 object-cover"
          sizes="12em"
        />
      </div>
      <div className="flex flex-col gap-4 md:py-4 flex-1">
        <Name className="bg:text-5xl text-4xl font-bold" locale={locale} />
        <h2 className="text-xl leading-normal">{formatMessage(metaMessages.tagline)}</h2>
        <div className="mt-2">
          <Chip variant={ChipVariant.PRIMARY}>{availability}</Chip>
        </div>
      </div>
    </header>
  );
}
