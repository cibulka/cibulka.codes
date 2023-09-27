import { Contact } from '@/components/contact/Contact';
import { CONTACT, Locale } from '@/constants/config';
import { IconPhone } from '@/icons/IconPhone';

export function ContactPhone(props: { locale: Locale }) {
  return (
    <Contact
      locale={props.locale}
      value={CONTACT.PHONE}
      icon={<IconPhone />}
      href={`phone:${CONTACT.PHONE}`}
    />
  );
}
