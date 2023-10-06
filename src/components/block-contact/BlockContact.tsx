import NextImage from 'next/image';

import { ContactEmail } from '@/components/contact-email/ContactEmail';
import { ContactPhone } from '@/components/contact-phone/ContactPhone';
import { ChipLink } from '@/components/chip-link/ChipLink';
import { LinkLocalized } from '@/components/link-localized/LinkLocalized';
import { Locale, SOCIAL } from '@/constants/config';
import { IconGitHub } from '@/icons/IconGitHub';
import { IconLinkedIn } from '@/icons/IconLinkedIn';
import { getClassNamePlausible } from '@/utils/plausible';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { URLS } from '@/constants/url';

export function BlockContact(props: {
  className?: string;
  classNamePic?: string;
  isCV: boolean;
  locale: Locale;
}) {
  return (
    <div className={['flex', props.className, 'text-sm gap-4'].filter(Boolean).join(' ')}>
      <LinkLocalized
        className={[props.classNamePic, 'relative overflow-hidden rounded-md', 'bg-chip_fade']
          .filter(Boolean)
          .join(' ')}
        href={URLS.READ_ME}
        locale={props.locale}
        style={{ position: 'relative', height: '6.75em', width: '6.75em', overflow: 'hidden' }}
      >
        <NextImage
          src="/petr.jpg"
          fill
          alt="Photo"
          className="absolute top-0 left-0 object-cover"
          sizes="6em"
        />
      </LinkLocalized>
      <div className="flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <ContactEmail locale={props.locale} />
          </li>
          <li>
            <ContactPhone locale={props.locale} />
          </li>
          {props.isCV && (
            <li className="-mt-1">
              <ChipLink href="https://www.cibulka.codes" />
            </li>
          )}
        </ul>
        <ul className="flex gap-4 text-text_fade mt-4 print:hidden">
          <li>
            <a
              href={SOCIAL.GITHUB}
              className={['flex w-8 h-8', getClassNamePlausible(PLAUSIBLE_GOALS.GITHUB)].join(' ')}
              title="GitHub"
            >
              <IconGitHub />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.LINKED_IN}
              className={['flex w-8 h-8', getClassNamePlausible(PLAUSIBLE_GOALS.LINKED_IN)].join(
                ' ',
              )}
              title="LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
