import { Education, Position, Project } from 'contentlayer/generated';

import { BlockContact } from '@/components/block-contact/BlockContact';
import { ChipAvailability } from '@/components/chip-availability/ChipAvailability';
import { ChipLink } from '@/components/chip-link/ChipLink';
import { ChipLocation } from '@/components/chip-location/ChipLocation';
import { LayoutPaper } from '@/components/layout-paper/LayoutPaper';
import { Name } from '@/components/name/Name';
import { Position as PositionView } from '@/components/position/Position';
import { Project as ProjectView } from '@/components/project/Project';
import { Skills } from '@/components/skills/Skills';
import { Locale, REPO } from '@/constants/config';
import { getDocuments } from '@/content/getDocuments';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { IconGitHub } from '@/icons/IconGitHub';

export async function Resume(props: { isRoute?: boolean; locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  const positions = getDocuments(['Position'], props.locale) as Position[];
  const educations = getDocuments(['Education'], props.locale) as Education[];
  const projects = getDocuments(['Project'], props.locale) as Project[];
  return (
    <>
      <style>{`
          html {
            font-size: 12.8px;
            -webkit-print-color-adjust: exact;
          }
        `}</style>
      <LayoutPaper isRoute={props.isRoute} isSinglePage>
        <div className="flex gap-8 h-full">
          <div className="flex flex-col gap-8 relative" style={{ width: '21em' }}>
            <aside className="flex flex-col gap-2 mb-4">
              <Name className="text-4xl" locale={props.locale} />
              <p className="max-w-xs text-lg leading-snug">{t('tagline')}</p>
            </aside>
            <div className="flex gap-4">
              <div className="flex-1">
                <ChipLocation locale={props.locale} />
              </div>
              <div className="flex-1">
                <ChipAvailability locale={props.locale} />
              </div>
            </div>

            <div>
              <h2 className="font-bold mb-2">{t('cv.sections.skills')}</h2>
              <Skills locale={props.locale} types={['main', 'code']} />
            </div>
            <div>
              <h2 className="font-bold mb-2">{t('cv.sections.languages')}</h2>
              <Skills locale={props.locale} types={['language']} />
            </div>
            <div>
              <h2 className="font-bold mb-2">{t('cv.sections.tools.short')}</h2>
              <Skills locale={props.locale} types={['tool']} />
            </div>
            <div>
              <h2 className="font-bold mb-2">{t('cv.sections.demos')}</h2>
              <ul>
                <li>
                  <a className="flex gap-1 items-center pl-1" href={REPO.TETRIS}>
                    <span className="w-6 h-6 text-text_fade">
                      <IconGitHub />
                    </span>
                    <ChipLink href={REPO.TETRIS} isInsideLink />
                  </a>
                </li>
                <li>
                  <a className="flex gap-1 items-center pl-1" href={REPO.PORTFOLIO}>
                    <span className="w-6 h-6 text-text_fade">
                      <IconGitHub />
                    </span>
                    <ChipLink href={REPO.PORTFOLIO} isInsideLink />
                  </a>
                </li>
              </ul>
            </div>
            {educations.length > 0 && (
              <div>
                <h2 className="font-bold mb-2">{t('cv.sections.education')}</h2>
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
              <h2 className="font-bold mb-2">{t('cv.sections.hobbies')}</h2>
              <Skills locale={props.locale} types={['hobby']} />
            </div>
            <div className="flex-1" />
            <div className={['sticky bottom-0', 'bg-white', 'pb-4', 'pt-4 border-t'].join(' ')}>
              <BlockContact isCV locale={props.locale} />
            </div>
          </div>
          <section className="flex-1">
            <h2 className="text-xl font-bold mb-4">{t('cv.sections.experience')}</h2>
            <ul className="flex flex-col gap-4">
              {projects
                .filter((project) => project.slug !== 'tetris')
                .map((project) => (
                  <li key={project.slug}>
                    <ProjectView project={project} locale={props.locale} isSkillsHidden />
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </LayoutPaper>
    </>
  );
}
