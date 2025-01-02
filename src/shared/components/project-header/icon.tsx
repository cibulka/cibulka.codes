import { IconBriefcase } from '@/icons/IconBriefcase';
import { IconCaseAfterRussia } from '@/icons/IconCaseAfterRussia';
import { IconCaseDotu } from '@/icons/IconCaseDotu';
import { IconCaseTvar } from '@/icons/IconCaseTvar';
import IconCreativeDock from '@/icons/IconCreativeDock';
import { IconDrAbe } from '@/icons/IconDrAbe';
import { IconEducationDamu } from '@/icons/IconEducationDamu';
import { IconEducationMuni } from '@/icons/IconEducationMuni';
import { IconEon } from '@/icons/IconEon';
import { IconTetris } from '@/icons/IconTetris';

const projectIcons = {
  'after-russia': IconCaseAfterRussia,
  apitree: IconEon,
  'creative-dock': IconCreativeDock,
  eon: IconEon,
  dotu: IconCaseDotu,
  'dr-abe': IconDrAbe,
  freelance: IconBriefcase,
  tetris: IconTetris,
  tvar: IconCaseTvar,
  damu: IconEducationDamu,
  muni: IconEducationMuni,
};

export function ProjectIcon(props: { className?: string; slug: string }) {
  const Icon = projectIcons[props.slug as keyof typeof projectIcons];
  return <span className={props.className}>{Icon ? <Icon /> : null}</span>;
}
