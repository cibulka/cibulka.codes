import { Education, type Project, Skill } from 'contentlayer/generated';

import { FEATURED, HomeSectionId, SKILL_CATEGORY } from '@/constants/config';
import { ChipVariant } from '@/shared/components/chip';
import { ChipLink } from '@/shared/components/chip-link';
import { ProjectHeader } from '@/shared/components/project-header';
import { ProjectView } from '@/shared/components/project-view';
import { Skills } from '@/shared/components/skills';
import { getIntl } from '@/shared/i18n/get-intl';
import { getDocuments } from '@/shared/mdx-reader/get-documents';
import { sectionMessages, toolsMessages } from '@/shared/messages';
import { ParamsWithLocale } from '@/types/params';

import { Featured } from './featured';
import { HomePageHeader } from './header';
import { HomeSection } from './section';

export async function HomePage({ params: { locale } }: ParamsWithLocale) {
  const { formatMessage } = await getIntl(locale);

  const projects = getDocuments(['Project'], locale) as Project[];
  const featured = projects.filter((c) => FEATURED.includes(c.slug));
  const educations = getDocuments(['Education'], locale) as Education[];

  const skills = (getDocuments(['Skill'], locale) as Skill[]).filter((skill) => {
    return SKILL_CATEGORY.includes(skill.category);
  });
  const skillsPast = skills.filter((s) => s.status === 'past');
  const skillsFuture = skills.filter((s) => s.status === 'future');
  const skillsPresent = skills.filter((s) => !s.status);
  const skillsMain = skillsPresent.filter((s) => s.category === 'main');
  const skillsCode = skillsPresent.filter((s) => s.category === 'code');
  const skillsTools = skillsPresent.filter((s) => s.category === 'tool');

  return (
    <>
      <HomePageHeader locale={locale} />

      <Skills
        skillsFeatured={skillsMain.map((s) => s.slug)}
        title={formatMessage(toolsMessages.present)}
        skills={[...skillsMain, ...skillsCode, ...skillsTools]}
        locale={locale}
        variant={ChipVariant.NAKED}
      />

      <HomeSection id={HomeSectionId.PROJECTS} label={formatMessage(sectionMessages.projects)}>
        <ul className="flex flex-col gap-8">
          {featured.map((f) => (
            <li key={f.slug}>
              <Featured locale={locale} project={f} />
            </li>
          ))}
        </ul>
      </HomeSection>
      <HomeSection id={HomeSectionId.EXPERIENCE} label={formatMessage(sectionMessages.experience)}>
        <ul className="flex flex-col gap-8">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectView isBorder locale={locale} project={project} />
            </li>
          ))}
        </ul>
      </HomeSection>
      <HomeSection id={HomeSectionId.EDUCATION} label={formatMessage(sectionMessages.education)}>
        <ul className="flex flex-col gap-6">
          {educations.map((education) => (
            <li key={education.slug}>
              <article>
                <ProjectHeader locale={locale} project={education} />
                {education.www && <ChipLink href={education.www} />}
              </article>
            </li>
          ))}
        </ul>
      </HomeSection>
      <Skills
        title={formatMessage(toolsMessages.past)}
        skills={skillsPast}
        locale={locale}
        variant={ChipVariant.NAKED}
      />
      <Skills
        skills={skillsFuture}
        locale={locale}
        title={formatMessage(toolsMessages.future)}
        variant={ChipVariant.NAKED}
      />
    </>
  );
}
