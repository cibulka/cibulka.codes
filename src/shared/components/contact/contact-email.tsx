import { CONTACT } from '@/constants/contact';
import { IconEmail } from '@/icons/IconEmail';
import { Locale } from '@/shared/i18n/types';

import { Contact } from './contact';

export function ContactEmail(props: { locale: Locale }) {
  return (
    <Contact
      locale={props.locale}
      value={CONTACT.EMAIL}
      icon={<IconEmail />}
      href={`mailto:${CONTACT.EMAIL}`}
    />
  );
}
