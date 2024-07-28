import { Education, Position, Project, Skill } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import { REPO } from '@/constants/config';
import { URLS } from '@/constants/url';
import { IconGitHub } from '@/icons/IconGitHub';
import { ChipAvailability } from '@/shared/components/chip-availability';
import { ChipLink } from '@/shared/components/chip-link';
import { ChipLocation } from '@/shared/components/chip-location';
import { Contacts } from '@/shared/components/contacts';
import { Name } from '@/shared/components/name';
import { Paper } from '@/shared/components/paper';
import { PositionView } from '@/shared/components/position-view';
import { ProjectView } from '@/shared/components/project-view';
import { Skills } from '@/shared/components/skills';
import { getIntl } from '@/shared/i18n/get-intl';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { metaMessages, sectionMessages, toolsMessages } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';

import { ChipVariant } from '@/shared/components/chip';
import './resume.css';

export async function Resume(props: PropsWithLocale) {
  const { formatMessage } = await getIntl(props.locale);
  const positions = getDocuments(['Position'], props.locale) as Position[];
  const educations = getDocuments(['Education'], props.locale) as Education[];
  const projects = getDocuments(['Project'], props.locale) as Project[];

  const skills = getDocuments(['Skill'], props.locale) as Skill[];
  const skillsMain = skills
    .filter((category) => category?.status !== 'past' && category?.status !== 'future')
    .filter(({ category }) => category === 'main');
  const skillsCode = skills
    .filter((category) => category?.status !== 'past' && category?.status !== 'future')
    .filter(({ category }) => category === 'code');
  const skillsLanguages = skills.filter(({ category }) => category === 'language');
  const skillsTools = skills.filter(({ category }) => category === 'tool');
  const skillsHobbies = skills.filter(({ category }) => category === 'hobby');

  return (
    <Paper isCentered isSinglePage>
      <div className="flex gap-8 h-full">
        <div className="flex flex-col gap-8 relative" style={{ width: '21em' }}>
          <aside className="flex flex-col gap-2">
            <Link
              className={[
                'w-2/5 mb-4 aspect-square',
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
                sizes="100vw"
              />
            </Link>
            <Name className="text-4xl" locale={props.locale} />
            <p className="max-w-xs text-lg leading-snug">{formatMessage(metaMessages.tagline)}</p>
          </aside>
          <div className="flex flex-col gap-1">
            <ChipLocation locale={props.locale} />
            <ChipAvailability locale={props.locale} />
          </div>

          <div>
            <h2 className="font-bold mb-2">{formatMessage(sectionMessages.skills)}</h2>
            <Skills
              locale={props.locale}
              skills={[...skillsMain, ...skillsCode]}
              variant={ChipVariant.BASIC}
            />
          </div>
          <div>
            <h2 className="font-bold mb-2">{formatMessage(sectionMessages.languages)}</h2>
            <Skills locale={props.locale} skills={skillsLanguages} />
          </div>
          <div>
            <h2 className="font-bold mb-2">{formatMessage(toolsMessages.short)}</h2>
            <Skills locale={props.locale} skills={skillsTools} />
          </div>
          <div>
            <h2 className="font-bold mb-2">{formatMessage(sectionMessages.demos)}</h2>
            <ul>
              <li>
                <a className="flex gap-1 items-center pl-1" href={REPO.TETRIS}>
                  <span className="flex-shrink-0 w-6 h-6 text-text_fade">
                    <IconGitHub />
                  </span>
                  <ChipLink href={REPO.TETRIS} isInsideLink />
                </a>
              </li>
              <li>
                <a className="flex gap-1 items-center pl-1" href={REPO.PORTFOLIO}>
                  <span className="flex-shrink-0 w-6 h-6 text-text_fade">
                    <IconGitHub />
                  </span>
                  <ChipLink href={REPO.PORTFOLIO} isInsideLink />
                </a>
              </li>
            </ul>
          </div>
          {educations.length > 0 && (
            <div>
              <h2 className="font-bold mb-2">{formatMessage(sectionMessages.education)}</h2>
              <ul className="flex flex-col gap-4">
                {educations.map((edu) => (
                  <li key={edu.slug}>
                    <h3 className="font-semibold mb-2 leading-snug">
                      {edu.title} / {edu.excerpt}
                    </h3>
                    {edu.positions && edu.positions.length > 0 && (
                      <div className="flex flex-col gap-1">
                        {edu.positions.map((job) => {
                          const position = positions.find((p) => p.slug === job.slug);
                          return position ? (
                            <div key={job.slug} className="text-sm">
                              <PositionView
                                classNameTitle="font-semibold"
                                position={position}
                                job={job}
                                locale={props.locale}
                              />
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="font-bold mb-2">{formatMessage(sectionMessages.hobbies)}</h2>
            <Skills locale={props.locale} skills={skillsHobbies} />
          </div>
          <div className="flex-1" />
          <div className={['sticky bottom-0', 'bg-white', 'pb-4'].join(' ')}>
            <Contacts locale={props.locale} />
          </div>
        </div>
        <section className="flex flex-col">
          <div className="flex-1" />
          <h2 className="text-xl font-bold mb-4">{formatMessage(sectionMessages.experience)}</h2>
          <ul className="flex flex-col gap-4">
            {projects
              .filter((project) => !project.minor)
              .filter((project) => project.slug !== 'tetris')
              .map((project) => (
                <li key={project.slug}>
                  <ProjectView project={project} locale={props.locale} isSkillsHidden />
                </li>
              ))}
          </ul>
          <div className="flex-1" />
          <div className="flex-1" />
        </section>
      </div>
    </Paper>
  );
}
