'server only';

import type { Project, Skill } from 'contentlayer/generated';

import { ChipLink } from '@/shared/components/chip-link';
import { ProjectHeader } from '@/shared/components/project-header';
import { Skills } from '@/shared/components/skills';
import { MdxReader } from '@/shared/mdx-reader';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { PropsWithLocale } from '@/types/params';
import { getPlausibleClassNameForLink } from '@/utils/plausible';

export function ProjectView(
  props: PropsWithLocale<{
    className?: string;
    project: Project;
    isFeatured?: boolean;
    isBorder?: boolean;
    isSkillsHidden?: boolean;
  }>,
) {
  const skills = getDocuments(['Skill'], props.locale) as Skill[];
  const projectSkills = skills.filter((skill) => props.project.skills?.includes(skill.slug));

  return (
    <article
      className={[
        'sm:rounded-md',
        props.className,
        props.isBorder && 'sm:-ml-4 sm:-mr-4 sm:p-4 sm:bg-paper border-button_shade',
        props.isBorder && 'sm:border sm:border-dotted',
        props.isBorder && 'mdMax:border-b pb-8',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ProjectHeader locale={props.locale} project={props.project} />
      <div className="text mb-2">
        <MdxReader locale={props.locale} mdx={props.project.body.code} />
      </div>
      {props.project.www && (
        <ChipLink
          classNamePlausible={getPlausibleClassNameForLink(props.project.slug)}
          href={props.project.www}
        />
      )}
      {!props.isSkillsHidden && projectSkills?.length > 0 && (
        <Skills
          className="mt-4"
          classNameList="text-sm mt-0.5"
          isIcon
          locale={props.locale}
          skills={projectSkills}
        />
      )}
    </article>
  );
}
