import { Contact } from '@/components/contact/Contact';
import { CONTACT } from '@/constants/config';
import { IconPhone } from '@/icons/IconPhone';

export function ContactPhone() {
  return <Contact value={CONTACT.PHONE} icon={<IconPhone />} href={`phone:${CONTACT.PHONE}`} />;
}
