import { usePlausible } from 'next-plausible';

import { PLAUSIBLE_GOALS, PlausibleGoal } from '@/constants/plausible';

export function getClassNamePlausible(type: PlausibleGoal) {
  if (!process.env.IS_PRODUCTION) return undefined;
  const event = PLAUSIBLE_GOALS[type];
  return event ? `plausible-event-name=${PLAUSIBLE_GOALS[type]}` : undefined;
}

export function usePlausibleEvent(type?: PlausibleGoal) {
  const plausible = usePlausible();

  return type
    ? () => {
        if (process.env.IS_PRODUCTION) plausible(type);
      }
    : undefined;
}

export function getPlausibleClassNameForLink(slug: string) {
  let event: PlausibleGoal | undefined = undefined;
  switch (slug) {
    case 'dotu':
      event = PLAUSIBLE_GOALS.LINK_DOTU;
      break;
    case 'tetris':
      event = PLAUSIBLE_GOALS.LINK_TETRIS;
      break;
    case 'after-russia':
      event = PLAUSIBLE_GOALS.LINK_AFTER_RUSSIA;
      break;
    case 'portfolio':
    case 'cibulka.codes':
      event = PLAUSIBLE_GOALS.LINK_PORTFOLIO;
      break;
    default:
      event = undefined;
  }
  return event ? getClassNamePlausible(event) : undefined;
}
