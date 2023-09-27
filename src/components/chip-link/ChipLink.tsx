import { Chip } from '@/components/chip/Chip';
import { IconLink } from '@/icons/IconLink';
import { getUrlLabel } from '@/utils/url';

export function ChipLink(props: {
  classNamePlausible?: string;
  href: string;
  isInsideLink?: boolean;
  variant?: 'primary' | 'basic';
}) {
  return (
    <Chip
      className={props.classNamePlausible}
      icon={<IconLink />}
      isIconRight
      isNoUnderline
      href={props.isInsideLink ? undefined : props.href}
      variant={props.variant}
    >
      <span className="underline whitespace-nowrap">{getUrlLabel(props.href)}</span>
    </Chip>
  );
}
