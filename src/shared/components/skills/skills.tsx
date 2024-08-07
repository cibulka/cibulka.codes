import { Skill } from 'contentlayer/generated';

import { IconBriefcase } from '@/icons/IconBriefcase';
import { Chip, ChipVariant } from '@/shared/components/chip';
import { sortByPriority } from '@/shared/mdx-reader/sort-documents';
import { PropsWithLocale } from '@/types/params';

export function Skills(
  props: PropsWithLocale<{
    className?: string;
    classNameList?: string;
    classNameTitle?: string;
    isIcon?: boolean;
    skills: Skill[];
    skillsFeatured?: string[];
    title?: string;
    variant?: ChipVariant;
  }>,
) {
  const skillsSorted = props.skills.sort(sortByPriority);
  return (
    <section className={props.className}>
      {props.title && (
        <h2 className={props.classNameTitle || 'text-xl font-bold mb-4'}>{props.title}</h2>
      )}
      <div className="flex gap-2">
        {props.isIcon && (
          <div className="text_fade w-6 h-6 flex-shrink-0">
            <IconBriefcase />
          </div>
        )}
        <ul
          className={[
            props.classNameList,
            'flex flex-wrap',
            props.variant === ChipVariant.NAKED ? 'gap-4' : 'gap-2',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {skillsSorted.map((skill) => {
            const isFeatured = props.skillsFeatured?.includes(skill.slug);
            return (
              <li key={skill.slug}>
                <Chip variant={isFeatured ? ChipVariant.BASIC : props.variant}>{skill.title}</Chip>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
