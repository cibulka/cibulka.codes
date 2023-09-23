import { Contact } from '@/components/contact/Contact';
import { CONTACT } from '@/constants/config';
import { IconEmail } from '@/icons/IconEmail';

export function ContactEmail() {
  return <Contact value={CONTACT.EMAIL} icon={<IconEmail />} href={`mailto:${CONTACT.EMAIL}`} />;
}
