import NextImage from 'next/image';

import { ContactEmail } from '@/components/contact-email/ContactEmail';
import { ContactPhone } from '@/components/contact-phone/ContactPhone';
import { ChipLink } from '@/components/chip-link/ChipLink';
import { IconGitHub } from '@/icons/IconGitHub';
import { IconLinkedIn } from '@/icons/IconLinkedIn';

export function BlockContact(props: { className?: string; classNamePic?: string; isCV: boolean }) {
  return (
    <div className={['flex', props.className, 'text-sm gap-4'].filter(Boolean).join(' ')}>
      <div
        className={[props.classNamePic, 'relative overflow-hidden rounded-md', 'bg-chip_fade']
          .filter(Boolean)
          .join(' ')}
        style={{ height: '6.75em', width: '6.75em' }}
      >
        <NextImage
          src="/petr.jpg"
          fill
          alt="Photo"
          className="absolute top-0 left-0 object-cover"
          sizes="6em"
        />
      </div>
      <div className="flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <ContactEmail />
          </li>
          <li>
            <ContactPhone />
          </li>
          {props.isCV && (
            <li className="-mt-1">
              <ChipLink href="https://www.cibulka.codes" />
            </li>
          )}
        </ul>
        <ul className="flex gap-4 text-text_fade mt-4 print:hidden">
          <li>
            <a href="https://github.com/cibulka" className="flex w-8 h-8">
              <IconGitHub />
            </a>
          </li>
          <li>
            <a href="https://github.com/cibulka" className="flex w-8 h-8">
              <IconLinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
