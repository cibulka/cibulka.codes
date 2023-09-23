import dayjs from 'dayjs';
import { Education, Position, Project } from 'contentlayer/generated';

import { getDocuments } from '@/content/getDocuments';

import { ProjectIcon } from './components/ProjectIcon';
import { IconBriefcase } from '@/icons/IconBriefcase';

export function ProjectHeader(props: {
  className?: string;
  classNameIcon?: string;
  locale: string;
  project: Project | Education;
  isJobsHidden?: boolean;
  isYearsHidden?: boolean;
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
            <ul className="mt-2">
              {positionsFiltered.map((p) => {
                const { start, end } = positions?.find((pos) => pos.slug === p.slug) || {};
                const startYear = dayjs(start).format('YYYY');
                const endYear = dayjs(end).format('YYYY');
                return start ? (
                  <li key={p.slug} className="flex items-center gap-1">
                    <span className="font-bold">{p.title}</span>
                    {!props.isYearsHidden && (
                      <span>
                        {startYear === endYear
                          ? startYear
                          : [startYear, end ? endYear : 'Present'].join(' – ')}
                      </span>
                    )}
                  </li>
                ) : null;
              })}
            </ul>
          )}
        </div>
        <ProjectIcon className="text-action w-6 h-6" slug={props.project.slug} />
      </div>
    </header>
  );
}
