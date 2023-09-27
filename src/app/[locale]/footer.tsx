import Link from 'next/link';

import { GITHUB_CIBULKA_CODES, Locale } from '@/constants/config';
import { IconGitHub } from '@/icons/IconGitHub';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { getPlausibleClassNameForLink } from '@/utils/plausible';

export async function Footer(props: { locale: Locale }) {
  const { t } = await getTranslationServer('common', props.locale);
  const classNamePlausible = getPlausibleClassNameForLink('cibulka.codes');
  return (
    <div className="text-sm mt-12 border-t border-t-button_shade pt-4">
      <div className="flex items-center gap-2">
        <a
          href={GITHUB_CIBULKA_CODES}
          className={['w-6 h-6', classNamePlausible].filter(Boolean).join(' ')}
          title="Repository"
        >
          <IconGitHub />
        </a>
        <div>
          <Link href="/readme" className="font-semibold border-b border-b-text_fade">
            {t('footer.readme')}
          </Link>{' '}
          <span>{t('or')}</span>{' '}
          <a
            href={GITHUB_CIBULKA_CODES}
            className={['border-b border-b-text_fade', classNamePlausible]
              .filter(Boolean)
              .join(' ')}
          >
            {t('footer.github')}
          </a>
          .
        </div>
      </div>
    </div>
  );
}
