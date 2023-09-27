import { Project } from 'contentlayer/generated';

import { Button } from '@/components/button/Button';
import { ChipLink } from '@/components/chip-link/ChipLink';
import { ProjectIcon } from '@/components/project-header/components/ProjectIcon';
import { Skills } from '@/components/skills/Skills';
import { TetrisBg } from '@/components/tetris-bg/TetrisBg';
import { VideoPlayer } from '@/components/video-player/VideoPlayer';
import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getPlausibleClassNameForLink } from '@/utils/plausible';

export async function Featured(props: { isFirst?: boolean; locale: Locale; project: Project }) {
  const { t } = await getTranslationServer('common', props.locale);
  return (
    <article className="rounded-md md:-ml-4 md:-mr-4">
      <header className="flex items-center justify-between gap-4 md:px-4 mb-2 text-lg">
        <h3 className="font-semibold whitespace-nowrap">{props.project.title}</h3>

        <div className="flex gap-2 items-center">
          <ProjectIcon
            className={[
              'xsMax:hidden',
              'w-8 h-8',
              'p-1 text-action',
              props.project.slug === 'after-russia' && 'transform translate-y-1',
            ]
              .filter(Boolean)
              .join(' ')}
            slug={props.project.slug}
          />
          <h4>{props.project.excerpt}</h4>
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
        {props.project.demo && <TetrisBg />}
        {props.project.demo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button href={props.project.demo}>{t('play')}</Button>
          </div>
        )}
        {props.project.video && (
          <VideoPlayer
            locale={props.locale}
            priority={Boolean(props.isFirst)}
            src={props.project.video}
            poster={props.project.video_poster}
            project={props.project.slug}
          />
        )}
      </div>
      <div className="md:px-4 mt-4 flex gap-8 justify-between">
        {props.project.www && (
          <ChipLink
            classNamePlausible={getPlausibleClassNameForLink(props.project.slug)}
            href={props.project.www}
            variant="primary"
          />
        )}
        {props.project.skills && (
          <Skills
            className="justify-end overflow-hidden h-8"
            isBorder
            locale={props.locale}
            slugs={props.project.skills}
          />
        )}
      </div>
    </article>
  );
}
