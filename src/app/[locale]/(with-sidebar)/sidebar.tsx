import Image from 'next/image';
import Link from 'next/link';

import { HomeSectionId } from '@/constants/config';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { URLS } from '@/constants/url';
import { IconTetris } from '@/icons/IconTetris';
import { Contacts } from '@/shared/components/contacts';
import { Name } from '@/shared/components/name';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';
import { metaMessages, sectionMessages } from '@/shared/messages';
import { getClassNamePlausible } from '@/utils/plausible';

import { SidebarMenu } from './sidebar-menu';

export async function Sidebar(props: {
  className: string;
  classNameHeaderInfo: string;
  locale: Locale;
}) {
  const { formatMessage } = await getIntl(props.locale);

  return (
    <div
      className={[
        props.className,
        'flex items-center gap-4',
        'md:flex-col md:items-start md:gap-0',
      ].join(' ')}
    >
      <Link
        className={[
          'w-32 md:w-1/2 md:mb-4',
          'aspect-square',
          'relative overflow-hidden rounded-md',
          'bg-chip_fade',
        ]
          .filter(Boolean)
          .join(' ')}
        href={URLS.READ_ME}
        locale={props.locale}
      >
        <Image
          src="/petr.jpg"
          fill
          alt="Photo"
          className="absolute top-0 left-0 object-cover"
          sizes="12em"
        />
      </Link>
      <header className="relative flex flex-col gap-1">
        <Name className="bg:text-5xl text-4xl" locale={props.locale} />
        <h2 className="text-sm leading-normal">{formatMessage(metaMessages.tagline)}</h2>
      </header>
      <div className={[props.classNameHeaderInfo, 'flex flex-col flex-1'].join(' ')}>
        <div className="flex-1" />
        <SidebarMenu
          className="flex flex-col gap-2"
          options={[
            {
              label: formatMessage(sectionMessages.projects),
              href: `#${HomeSectionId.PROJECTS}`,
            },
            {
              label: formatMessage(sectionMessages.experience),
              href: `#${HomeSectionId.EXPERIENCE}`,
            },
            {
              className: getClassNamePlausible(PLAUSIBLE_GOALS.EDUCATION),
              label: formatMessage(sectionMessages.education),
              href: `#${HomeSectionId.EDUCATION}`,
            },
            {
              label: formatMessage(sectionMessages.tetris),
              href: URLS.TETRIS,
              icon: <IconTetris className="fill-action" />,
            },
          ]}
        />
        <div className="flex-1" />
        <div className="flex-1" />
        <Contacts className="bgMax:flex-col" locale={props.locale} />
      </div>
    </div>
  );
}
