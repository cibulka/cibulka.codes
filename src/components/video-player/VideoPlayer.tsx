import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { VideoPlayerClient } from './components/VideoPlayerClient';

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
  priority: boolean;
  src: string;
}) {
  const { t } = await getTranslationServer('common', props.locale);

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
      poster={props.poster}
      priority={props.priority}
      src={props.src}
    />
  );
}
