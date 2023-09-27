import { Block, Education, Project } from 'contentlayer/generated';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlockContactBar } from '@/components/block-contact-bar/BlockContactBar';
import { ChipHireMe } from '@/components/chip-hire-me/ChipHireMe';
import { ChipAvailability } from '@/components/chip-availability/ChipAvailability';
import { ChipLink } from '@/components/chip-link/ChipLink';
import { ChipLocation } from '@/components/chip-location/ChipLocation';
import { Featured } from '@/components/featured/Featured';
import { MenuLocale } from '@/components/menu-locale/MenuLocale';
import { MdxReader } from '@/components/mdx-reader/MdxReader';
import { Project as ProjectView } from '@/components/project/Project';
import { ProjectHeader } from '@/components/project-header/ProjectHeader';
import { Skills } from '@/components/skills/Skills';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch';
import { getDocuments } from '@/content/getDocuments';
import { FEATURED, HOME_SECTIONS, LOCALES, Locale } from '@/constants/config';
import { getAlternates } from '@/meta/getAlternates';
import { getTranslationServer } from '@/utils/getTranslationServer';

import { Sidebar } from './sidebar';
import { HomeSection } from './section';
import styles from './page.module.css';

// TODO: Footer (with Readme link)
// TODO: Expandable README
// TODO: Tetris README (english)

export function generateMetadata(props: { params: { locale: string } }) {
  return {
    alternates: getAlternates(props.params.locale),
  };
}

export function generateStaticParams() {
  const result = LOCALES.map((locale) => ({
    locale,
  }));
  return result;
}

export const dynamicParams = false;

export default async function Home(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  if (!LOCALES.includes(props.params.locale)) notFound();

  const { t } = await getTranslationServer('common', locale);
  const projects = getDocuments(['Project'], locale) as Project[];
  const featured = projects.filter((c) => FEATURED.includes(c.slug));
  const educations = getDocuments(['Education'], locale) as Education[];

  const blocks = getDocuments(['Block'], props.params.locale) as Block[];
  const intro_1 = blocks.find((b) => b.slug === 'intro-1');
  const intro_2 = blocks.find((b) => b.slug === 'intro-2');

  return (
    <div className="relative">
      <div className={['w-full ml-auto mr-auto', styles.wrap].join(' ')}>
        <Sidebar
          className={styles.header}
          classNameHeaderInfo={styles.header_info}
          locale={locale}
        />
        <div className={styles.content}>
          <div className="flex flex-col xl:gap-12 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <MenuLocale locale={locale} />
                <ThemeSwitch labels={{ dark: t('darkMode.dark'), light: t('darkMode.light') }} />
              </div>
              {intro_1 && intro_2 && (
                <div className="text md:text-xl md:leading-normal">
                  <MdxReader locale={locale} mdx={intro_1.body.code} />
                  <MdxReader locale={locale} mdx={intro_2.body.code} />
                </div>
              )}
              <div className="flex items-center justify-between">
                <ChipHireMe className="xsMax:hidden" locale={locale} />
                <ChipLocation locale={locale} />
                <ChipAvailability locale={locale} />
              </div>
            </div>
            <HomeSection id={HOME_SECTIONS.PROJECTS} label={t('cv.sections.projects')}>
              <ul className="flex flex-col gap-8">
                {featured.map((f, i) => (
                  <li key={f.slug}>
                    <Featured isFirst={i === 0} locale={locale} project={f} />
                  </li>
                ))}
              </ul>
            </HomeSection>

            <section>
              <h2 className="text-xl font-bold mb-4">{t('cv.sections.tools.present')}</h2>
              <Skills locale={props.params.locale} />
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">{t('cv.sections.tools.past')}</h2>
              <Skills locale={props.params.locale} isPast />
            </section>

            <HomeSection id={HOME_SECTIONS.EXPERIENCE} label={t('cv.sections.experience')}>
              <ul className="flex flex-col gap-8">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <ProjectView isBorder project={project} locale={locale} />
                  </li>
                ))}
              </ul>
            </HomeSection>
            <HomeSection id={HOME_SECTIONS.EDUCATION} label={t('cv.sections.education')}>
              <ul className="flex flex-col gap-6">
                {educations.map((education) => (
                  <li key={education.slug}>
                    <article>
                      <ProjectHeader isYearsHidden locale={locale} project={education} />
                      {education.www && <ChipLink href={education.www} />}
                    </article>
                  </li>
                ))}
              </ul>
            </HomeSection>
            <section>
              <h2 className="text-xl font-bold mb-4">{t('cv.sections.tools.future')}</h2>
              <Skills locale={locale} isFuture />
            </section>
          </div>
          <div className="text-xs mt-12 border-t border-t-button_shade pt-4">
            Powered by Next.js, Tailwind and MDX (Contentlayer).
            <Link href="/readme">README</Link>
          </div>
        </div>
      </div>
      <BlockContactBar className={styles['contact-bar']} locale={locale} />
    </div>
  );
}
