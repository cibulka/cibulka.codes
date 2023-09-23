import { IconBriefcase } from '@/icons/IconBriefcase';
import { IconCaseAfterRussia } from '@/icons/IconCaseAfterRussia';
import { IconCaseDotu } from '@/icons/IconCaseDotu';
import { IconCaseTvar } from '@/icons/IconCaseTvar';
import { IconDrAbe } from '@/icons/IconDrAbe';
import { IconEducationDamu } from '@/icons/IconEducationDamu';
import { IconEducationMuni } from '@/icons/IconEducationMuni';
import { IconTetris } from '@/icons/IconTetris';

function getIcon(slug: string) {
  switch (slug) {
    case 'after-russia':
      return <IconCaseAfterRussia />;
    case 'dotu':
      return <IconCaseDotu />;
    case 'dr-abe':
      return <IconDrAbe />;
    case 'freelance':
      return <IconBriefcase />;
    case 'tetris':
      return <IconTetris />;
    case 'tvar':
      return <IconCaseTvar />;
    case 'damu':
      return <IconEducationDamu />;
    case 'muni':
      return <IconEducationMuni />;
    default:
      return null;
  }
}

export function ProjectIcon(props: { className?: string; slug: string }) {
  return <span className={props.className}>{getIcon(props.slug)}</span>;
}
