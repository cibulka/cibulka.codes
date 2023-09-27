import { BlockContact } from '@/components/block-contact/BlockContact';
import { Name } from '@/components/name/Name';
import { HOME_SECTIONS, Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { IconCV } from '@/icons/IconCV';
import { IconTetris } from '@/icons/IconTetris';

import { SidebarMenu } from './sidebar-menu';
import { getClassNamePlausible } from '@/utils/plausible';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';

export async function Sidebar(props: {
  className: string;
  classNameHeaderInfo: string;
  locale: Locale;
}) {
  const { t } = await getTranslationServer('common', props.locale);

  return (
    <div className={[props.className, 'flex flex-col'].join(' ')}>
      <header className="relative flex flex-col gap-1">
        <Name className="bg:text-5xl text-4xl" locale={props.locale} />
        <h2 className="text-sm leading-normal">{t('tagline')}</h2>
      </header>
      <div className={[props.classNameHeaderInfo, 'flex flex-col flex-1'].join(' ')}>
        <div className="flex-1" />
        <SidebarMenu
          className="flex flex-col gap-2"
          options={[
            {
              label: t('cv.sections.projects'),
              href: `#${HOME_SECTIONS.PROJECTS}`,
            },
            {
              label: t('cv.sections.experience'),
              href: `#${HOME_SECTIONS.EXPERIENCE}`,
            },
            {
              className: getClassNamePlausible(PLAUSIBLE_GOALS.EDUCATION),
              label: t('cv.sections.education'),
              href: `#${HOME_SECTIONS.EDUCATION}`,
            },
            {
              label: t('cv.sections.resume'),
              href: `/${props.locale}/cv.pdf`,
              icon: <IconCV className="fill-action flex transform scale-125" />,
            },
            {
              label: t('cv.sections.tetris'),
              href: '/tetris',
              icon: <IconTetris className="fill-action" />,
            },
          ]}
        />
        <div className="flex-1" />
        <div className="flex-1" />
        <BlockContact className="bgMax:flex-col" isCV={false} locale={props.locale} />
      </div>
    </div>
  );
}
