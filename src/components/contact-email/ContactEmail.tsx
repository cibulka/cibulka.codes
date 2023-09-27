import { Contact } from '@/components/contact/Contact';
import { CONTACT, Locale } from '@/constants/config';
import { IconEmail } from '@/icons/IconEmail';

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
