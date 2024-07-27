import { Skill } from 'contentlayer/generated';

import { Chip, ChipVariant } from '@/shared/components/chip';
import { PropsWithLocale } from '@/types/params';

export function Skills(
  props: PropsWithLocale<{
    className?: string;
    classNameList?: string;
    classNameTitle?: string;
    skills: Skill[];
    title?: string;
    variant?: ChipVariant;
  }>,
) {
  return (
    <section className={props.className}>
      {props.title && (
        <h2 className={props.classNameTitle || 'text-xl font-bold mb-4'}>{props.title}</h2>
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
        {props.skills.map((skill) => (
          <li key={skill.slug}>
            {props.variant === ChipVariant.NAKED ? (
              <span className="font-semibold text-sm">{skill.title}</span>
            ) : (
              <Chip variant={props.variant}>{skill.title}</Chip>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
