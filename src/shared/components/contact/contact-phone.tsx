import { CONTACT } from '@/constants/contact';
import { IconPhone } from '@/icons/IconPhone';
import { PropsWithLocale } from '@/types/params';

import { Contact } from './contact';

export function ContactPhone(props: PropsWithLocale) {
  return (
    <Contact
      locale={props.locale}
      value={CONTACT.PHONE}
      icon={<IconPhone />}
      href={`tel:${CONTACT.PHONE}`}
    />
  );
}
