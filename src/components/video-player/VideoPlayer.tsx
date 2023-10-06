import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { VideoPlayerClient } from './components/VideoPlayerClient';
import { PLAUSIBLE_GOALS, PlausibleGoal } from '@/constants/plausible';

export type VideoPlayerLabels = {
  hireMe: string;
  pause: string;
  play: string;
  replay: string;
  volumeOff: string;
  volumeOn: string;
};

export async function VideoPlayer(props: {
  locale: Locale;
  poster?: string;
  project?: string;
  priority: boolean;
  src: string;
}) {
  const { t } = await getTranslationServer('common', props.locale);

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
        hireMe: t('hireMe.button'),
        pause: t('video.pause'),
        play: t('video.play'),
        replay: t('video.replay'),
        volumeOff: t('video.volumeOff'),
        volumeOn: t('video.volumeOn'),
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
