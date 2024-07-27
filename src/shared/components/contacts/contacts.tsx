'use client';

import { useIntl } from 'react-intl';

import { SOCIAL } from '@/constants/config';
import { PLAUSIBLE_GOALS } from '@/constants/plausible';
import { IconGitHub } from '@/icons/IconGitHub';
import { IconLinkedIn } from '@/icons/IconLinkedIn';
import { IconStackOverflow } from '@/icons/IconStackOverflow';
import { ChipLink } from '@/shared/components/chip-link';
import { ContactEmail, ContactPhone } from '@/shared/components/contact';
import { socialMessages } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';
import { getClassNamePlausible } from '@/utils/plausible';

export function Contacts(
  props: PropsWithLocale<{
    className?: string;
    classNamePic?: string;
    isCentered?: boolean;
    isLinkToWeb?: boolean;
  }>,
) {
  const { formatMessage } = useIntl();
  return (
    <div className={['flex', props.className, 'text-sm gap-4'].filter(Boolean).join(' ')}>
      <div className="flex-1">
        <ul
          className={['flex flex-col gap-2', props.isCentered && 'items-center']
            .filter(Boolean)
            .join(' ')}
        >
          <li className="w-full">
            <ContactEmail locale={props.locale} />
          </li>
          <li className="w-full">
            <ContactPhone locale={props.locale} />
          </li>
          {props.isLinkToWeb && (
            <li className="-mt-1">
              <ChipLink href="https://www.cibulka.codes" />
            </li>
          )}
        </ul>
        <ul
          className={[
            'flex gap-4 text-text_fade mt-4 print:hidden',
            props.isCentered && 'justify-center',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <li>
            <a
              href={SOCIAL.GITHUB}
              className={['flex w-8 h-8', getClassNamePlausible(PLAUSIBLE_GOALS.GITHUB)].join(' ')}
              title={formatMessage(socialMessages.gitHub)}
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
              title={formatMessage(socialMessages.linkedIn)}
            >
              <IconLinkedIn />
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.STACK_OVERFLOW}
              className={[
                'flex w-8 h-8',
                getClassNamePlausible(PLAUSIBLE_GOALS.STACK_OVERFLOW),
              ].join(' ')}
              title={formatMessage(socialMessages.stackOverflow)}
            >
              <IconStackOverflow />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
