import { Education, Position, Project } from 'contentlayer/generated';
import dayjs from 'dayjs';

import { PositionView } from '@/shared/components/position-view';
import { Locale } from '@/shared/i18n/types';
import { getDocuments } from '@/shared/mdx-reader/get-documents';

import { ProjectIcon } from './icon';

export function ProjectHeader(props: {
  className?: string;
  classNameIcon?: string;
  locale: Locale;
  project: Project | Education;
  isJobsHidden?: boolean;
}) {
  const { positions, title, excerpt } = props.project;
  const positionSlugs = positions?.map((p) => p.slug);
  const positionsFiltered = (getDocuments(['Position'], props.locale) as Position[]).filter((p) =>
    positionSlugs?.includes(p.slug),
  );

  return (
    <header className={props.className}>
      <div
        className={['flex gap-4', props.isJobsHidden && 'items-center', 'mb-2']
          .filter(Boolean)
          .join(' ')}
      >
        <div className="flex-1">
          <h3 className="text-lg">
            <span className="font-semibold">{title}</span> – {excerpt}
          </h3>
          {!props.isJobsHidden && positionsFiltered.length > 0 && (
            <ul
              className={['mt-2', positionsFiltered.length > 1 && 'grid grid-cols-2 gap-2']
                .filter(Boolean)
                .join(' ')}
            >
              {positionsFiltered
                .sort((a, b) => {
                  const { start: aStart } = positions?.find((pos) => pos.slug === a.slug) || {};
                  const { start: bStart } = positions?.find((pos) => pos.slug === b.slug) || {};
                  if (!aStart) return -1;
                  if (!bStart) return 1;
                  return dayjs(bStart).unix() - dayjs(aStart).unix();
                })
                .map((p) => {
                  const job = positions?.find((pos) => pos.slug === p.slug);
                  return (
                    <li key={p.slug}>
                      <PositionView
                        classNameTitle="font-bold"
                        position={p}
                        job={job}
                        locale={props.locale}
                      />
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <ProjectIcon
          className={[
            'text-action',
            props.project.slug === 'eon' ? '-mt-2 w-12 h-12' : 'w-6 h-6',
          ].join(' ')}
          slug={props.project.slug}
        />
      </div>
    </header>
  );
}
