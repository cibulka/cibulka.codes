import Link from 'next/link';

import { REPO } from '@/constants/links';
import { URLS } from '@/constants/url';
import { IconGitHub } from '@/icons/IconGitHub';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';
import { getPlausibleClassNameForLink } from '@/utils/plausible';

import { footerMessage } from './messages';

export async function Footer(props: { locale: Locale }) {
  const { formatMessage } = await getIntl(props.locale);
  const classNamePlausible = getPlausibleClassNameForLink('cibulka.codes');
  return (
    <div className="text-sm mt-12 border-t border-t-button_shade pt-4">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6">
          <IconGitHub />
        </span>
        <div>
          {/* @ts-expect-error here we add HTML elements as defined in docs */}
          {formatMessage(footerMessage, {
            linkReadme: (props) => (
              <Link
                href={URLS.READ_ME}
                className={[classNamePlausible, 'font-semibold border-b border-b-text_fade']
                  .filter(Boolean)
                  .join(' ')}
                key="readme"
              >
                {props[0]}
              </Link>
            ),
            linkRepo: (props) => (
              <a
                href={REPO.PORTFOLIO}
                className={[classNamePlausible, 'font-semibold border-b border-b-text_fade']
                  .filter(Boolean)
                  .join(' ')}
                key="repo"
              >
                {props[0]}
              </a>
            ),
          })}
        </div>
      </div>
    </div>
  );
}
