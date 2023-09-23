import { Project } from 'contentlayer/generated';

import { ChipLink } from '@/components/chip-link/ChipLink';
import { ProjectHeader } from '@/components/project-header/ProjectHeader';
import { MdxReader } from '@/components/mdx-reader/MdxReader';
import { Skills } from '@/components/skills/Skills';

export function Project(props: {
  project: Project;
  isFeatured?: boolean;
  isBorder?: boolean;
  isSkillsHidden?: boolean;
  locale: string;
}) {
  return (
    <article
      className={[
        'md:rounded-md',
        props.isBorder && 'md:-ml-4 md:-mr-4 md:p-4 border-button_shade',
        props.isBorder && 'md:border md:border-dotted',
        props.isBorder && 'mdMax:border-b pb-8',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ProjectHeader locale={props.locale} project={props.project} />
      <div className="text mb-2">
        <MdxReader locale={props.locale} mdx={props.project.body.code} />
      </div>
      {props.project.www && <ChipLink href={props.project.www} />}
      {!props.isSkillsHidden && props.project.skills && (
        <Skills className="mt-4" isJobsShown locale={props.locale} slugs={props.project.skills} />
      )}
    </article>
  );
}
