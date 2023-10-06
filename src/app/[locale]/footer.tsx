import { LinkLocalized } from '@/components/link-localized/LinkLocalized';
import { Locale, REPO } from '@/constants/config';
import { URLS } from '@/constants/url';
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
          href={REPO.PORTFOLIO}
          className={['w-6 h-6', classNamePlausible].filter(Boolean).join(' ')}
          title="Repository"
        >
          <IconGitHub />
        </a>
        <div>
          <LinkLocalized
            href={URLS.READ_ME}
            locale={props.locale}
            className="font-semibold border-b border-b-text_fade"
          >
            {t('footer.readme')}
          </LinkLocalized>{' '}
          <span>{t('or')}</span>{' '}
          <a
            href={REPO.PORTFOLIO}
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
