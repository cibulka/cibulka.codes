import { PLAUSIBLE_GOALS, PlausibleGoal } from '@/constants/plausible';
import { getIntl } from '@/shared/i18n/get-intl';
import { hireMeMessage } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';

import { VideoPlayerClient } from './client';
import { videoMessages } from './messages';

export async function VideoPlayer(
  props: PropsWithLocale<{
    poster?: string;
    project?: string;
    priority: boolean;
    src: string;
  }>,
) {
  const { formatMessage } = await getIntl(props.locale);

  let onStart: PlausibleGoal | undefined;
  let onFinish: PlausibleGoal | undefined;

  switch (props.project) {
    case 'dotu':
      onStart = PLAUSIBLE_GOALS.VIDEO_DOTU_STARTED;
      onFinish = PLAUSIBLE_GOALS.VIDEO_DOTU_FINISHED;
      break;
    case 'after-russia':
      onStart = PLAUSIBLE_GOALS.VIDEO_AFTER_RUSSIA_STARTED;
      onFinish = PLAUSIBLE_GOALS.VIDEO_AFTER_RUSSIA_FINISHED;
      break;
    default:
      onStart = undefined;
      onFinish = undefined;
      break;
  }

  return (
    <VideoPlayerClient
      labels={{
        hireMe: formatMessage(hireMeMessage),
        pause: formatMessage(videoMessages.pause),
        play: formatMessage(videoMessages.pause),
        replay: formatMessage(videoMessages.replay),
        volumeOff: formatMessage(videoMessages.volumeOff),
        volumeOn: formatMessage(videoMessages.volumeOn),
      }}
      locale={props.locale}
      poster={props.poster}
      priority={props.priority}
      plausible={{
        onFinish,
        onStart,
      }}
      src={props.src}
    />
  );
}
