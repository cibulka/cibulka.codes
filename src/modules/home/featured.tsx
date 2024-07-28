'server-only';

import { Project, Skill } from 'contentlayer/generated';

import { Button } from '@/shared/components/button';
import { ChipVariant } from '@/shared/components/chip';
import { ChipLink } from '@/shared/components/chip-link';
import { ProjectIcon } from '@/shared/components/project-header/icon';
import { Skills } from '@/shared/components/skills';
import { TetrisBg } from '@/shared/components/tetris-bg';
import { VideoPlayer } from '@/shared/components/video-player';
import { getIntl } from '@/shared/i18n/get-intl';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { PropsWithLocale } from '@/types/params';
import { getPlausibleClassNameForLink } from '@/utils/plausible';

import { featuredMessages } from './messages';

export async function Featured({
  locale,
  project,
  isFirst,
}: PropsWithLocale<{
  isFirst?: boolean;
  project: Project;
}>) {
  const { formatMessage } = await getIntl(locale);

  const skills = getDocuments(['Skill'], locale) as Skill[];
  const projectSkills = skills?.filter((skill) => project?.skills?.includes(skill.slug));

  return (
    <article className="rounded-md md:-ml-4 md:-mr-4">
      <header className="flex items-center justify-between gap-4 md:px-4 mb-2 text-lg">
        <h3 className="font-semibold whitespace-nowrap">{project.title}</h3>

        <div className="flex gap-2 items-center">
          <ProjectIcon
            className={[
              'xsMax:hidden',
              'w-8 h-8',
              'p-1 text-action',
              project.slug === 'after-russia' && 'transform translate-y-1',
            ]
              .filter(Boolean)
              .join(' ')}
            slug={project.slug}
          />
          <h4>{project.excerpt}</h4>
        </div>
      </header>
      <div
        className={[
          'relative aspect-video',
          'border border-chip_dark',
          'rounded-md overflow-hidden',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {project.demo && <TetrisBg />}
        {project.demo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button href={project.demo} locale={locale}>
              {formatMessage(featuredMessages.play)}
            </Button>
          </div>
        )}
        {project.video && (
          <VideoPlayer
            locale={locale}
            priority={Boolean(isFirst)}
            src={project.video}
            poster={project.video_poster}
            project={project.slug}
          />
        )}
      </div>
      <div className="md:px-4 mt-4 flex gap-8 justify-between">
        {project.www && (
          <ChipLink
            classNamePlausible={getPlausibleClassNameForLink(project.slug)}
            href={project.www}
            variant={ChipVariant.PRIMARY}
          />
        )}
        {projectSkills && (
          <Skills
            className="justify-end overflow-hidden h-8"
            locale={locale}
            skills={projectSkills}
          />
        )}
      </div>
    </article>
  );
}
