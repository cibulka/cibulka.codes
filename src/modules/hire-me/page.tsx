import { Project, Skill } from 'contentlayer/generated';
import Link from 'next/link';

import { CONTACT } from '@/constants/config';
import { DOMAIN, URLS } from '@/constants/url';
import { IconArrowLeft } from '@/icons/IconArrowLeft';
import { IconCaseAfterRussia } from '@/icons/IconCaseAfterRussia';
import { IconCaseDotu } from '@/icons/IconCaseDotu';
import { IconDownload } from '@/icons/IconDownload';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { IconPhone } from '@/icons/IconPhone';
import { IconTetris } from '@/icons/IconTetris';
import { ChipVariant } from '@/shared/components/chip';
import { Paper } from '@/shared/components/paper';
import { Skills } from '@/shared/components/skills';
import { getIntl } from '@/shared/i18n/get-intl';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { toolsMessages } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';

import { BigButton } from './big-button';
import { HireMeHeader } from './header';
import {
  backLinkMessage,
  contactSectionMessages,
  cvSectionMessages,
  linkSectionMessages,
  websiteMessages,
} from './messages';
import { ProjectCard } from './project-card';

export async function HireMe({ locale }: PropsWithLocale) {
  const { formatMessage } = await getIntl(locale);

  const skills = getDocuments(['Skill'], locale) as Skill[];
  const skillsPresent = skills.filter((s) => !s.status);
  const skillsMain = skillsPresent.filter(({ category }) => category === 'main');
  const skillsCode = skillsPresent.filter(({ category }) => category === 'code');
  const skillsTool = skillsPresent.filter(({ category }) => category === 'tool');

  const projects = getDocuments(['Project'], locale) as Project[];
  const tetris = projects.find((p) => p.slug === 'tetris');
  const dotu = projects.find((p) => p.slug === 'dotu');
  const after_russia = projects.find((p) => p.slug === 'after-russia');

  const backLink = (
    <Link href="/" className="flex items-center gap-2">
      <span className="w-6 h-6">
        <IconArrowLeft />
      </span>
      <span className="underline">{formatMessage(backLinkMessage)}</span>
    </Link>
  );

  return (
    <Paper isCentered backLink={backLink}>
      <div className="flex flex-col gap-8">
        <HireMeHeader locale={locale} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{formatMessage(cvSectionMessages.title)}</h2>
              <BigButton
                icon={<IconDownload />}
                label={formatMessage(cvSectionMessages.cta)}
                href={URLS.CV}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {formatMessage(contactSectionMessages.title)}
              </h2>
              <BigButton
                icon={<IconPhone />}
                label={CONTACT.PHONE}
                href={`call:${CONTACT.PHONE}`}
              />
            </div>
          </div>
          <div>
            <Skills
              classNameTitle="text-2xl font-bold mb-4"
              title={formatMessage(toolsMessages.present)}
              skills={[...skillsMain, ...skillsCode, ...skillsTool]}
              locale={locale}
              variant={ChipVariant.NAKED}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{formatMessage(linkSectionMessages.title)}</h2>
            <ul className="flex flex-col gap-3">
              {tetris && (
                <li>
                  <ProjectCard
                    icon={<IconTetris className="text-action" />}
                    title={tetris.title}
                    subtitle={tetris.excerpt}
                    href={URLS.TETRIS}
                    locale={locale}
                  />
                </li>
              )}
              {dotu && dotu.www && (
                <li>
                  <ProjectCard
                    icon={<IconCaseDotu className="text-red-500" />}
                    title={dotu.title}
                    subtitle={dotu.excerpt}
                    href={dotu.www}
                    locale={locale}
                  />
                </li>
              )}
              {after_russia && after_russia.www && (
                <li>
                  <ProjectCard
                    icon={<IconCaseAfterRussia className="text-blue-500" />}
                    title={after_russia.title}
                    subtitle={after_russia.excerpt}
                    href={after_russia.www}
                    locale={locale}
                  />
                </li>
              )}
              <li>
                <ProjectCard
                  icon={<IconOnionAlt className="text-action" />}
                  title={DOMAIN}
                  subtitle={formatMessage(websiteMessages.description)}
                  href={`https://www.${DOMAIN}`}
                  locale={locale}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Paper>
  );
}
