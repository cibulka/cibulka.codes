import { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { IconFullScreen } from '@/icons/IconFullScreen';
import { IconFullScreenOff } from '@/icons/IconFullScreenOff';
import { IconPause } from '@/icons/IconPause';
import { IconPlayMini } from '@/icons/IconPlayMini';
import { IconVolumeOff } from '@/icons/IconVolumeOff';
import { IconVolumeOn } from '@/icons/IconVolumeOn';

import { useVideoContext } from '../../context';
import { videoControlMessages } from '../../messages';
import { VideoPlayerState } from '../../types';

export function useControlLabels() {
  const intl = useIntl();
  const { videoState, isFullScreen, isMuted } = useVideoContext();

  const playLabel = useMemo(() => {
    const isPlaying = videoState === VideoPlayerState.PLAYING;
    const label = intl.formatMessage(videoControlMessages.play[isPlaying ? 'on' : 'off']);
    const icon = isPlaying ? <IconPause /> : <IconPlayMini />;
    return { label, icon };
  }, [intl, videoState]);

  const muteLabel = useMemo(() => {
    const label = intl.formatMessage(videoControlMessages.play[isMuted ? 'on' : 'off']);
    const icon = isMuted ? <IconVolumeOff /> : <IconVolumeOn />;
    return { label, icon };
  }, [intl, isMuted]);

  const fullScreenLabel = useMemo(() => {
    const label = intl.formatMessage(videoControlMessages.play[isFullScreen ? 'on' : 'off']);
    const icon = isFullScreen ? <IconFullScreenOff /> : <IconFullScreen />;
    return { label, icon };
  }, [intl, isFullScreen]);

  return { fullScreenLabel, muteLabel, playLabel };
}
