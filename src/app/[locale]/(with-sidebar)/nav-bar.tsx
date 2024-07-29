import { ReactNode } from 'react';

import { CONTACT } from '@/constants/config';
import { URLS } from '@/constants/url';
import { IconCV } from '@/icons/IconCV';
import { IconEmail } from '@/icons/IconEmail';
import { IconPhone } from '@/icons/IconPhone';
import { IconTetris } from '@/icons/IconTetris';
import { getIntl } from '@/shared/i18n/get-intl';
import { Locale } from '@/shared/i18n/types';

import { getLinkComponent } from '@/utils/url';
import { navBarMessages } from './messages';

function NavBarIcon(props: { href: string; icon: ReactNode; label: string }) {
  const LinkUsed = getLinkComponent(props.href);
  return (
    <LinkUsed href={props.href} className="flex flex-col items-center justify-center flex-1">
      <span className="w-8 h-8 text-text_fade">{props.icon}</span>
      <span>{props.label}</span>
    </LinkUsed>
  );
}

export async function NavBar(props: { className: string; locale: Locale }) {
  const { formatMessage } = await getIntl(props.locale);
  return (
    <div
      className={[props.className, 'mt-8 py-2 bg-background border-t'].filter(Boolean).join(' ')}
    >
      <div className="relative z-10 flex justify-between w-full">
        <NavBarIcon
          href={URLS.TETRIS}
          icon={<IconTetris />}
          label={formatMessage(navBarMessages.tetris)}
        />
        <NavBarIcon
          href={`mailto:${CONTACT.EMAIL}`}
          icon={<IconEmail />}
          label={formatMessage(navBarMessages.email)}
        />
        <NavBarIcon
          href={`tel:${CONTACT.PHONE}`}
          icon={<IconPhone />}
          label={formatMessage(navBarMessages.phone)}
        />
        <NavBarIcon
          href={`/${props.locale}/cv.pdf`}
          icon={<IconCV />}
          label={formatMessage(navBarMessages.cv)}
        />
      </div>
    </div>
  );
}
