'use client';

import { useEffect, useRef, useState } from 'react';

import { useVideoContext } from '../../context';
import { VideoPlayerState } from '../../types';

const intervalMs = 1000;

export function useControlsVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const { videoState } = useVideoContext();

  const ref = useRef<HTMLDivElement>(null);
  const isPlaying = videoState === VideoPlayerState.PLAYING;

  useEffect(() => {
    const div = ref.current;

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, intervalMs);
    };

    if (div) {
      if (isPlaying) {
        div.addEventListener('mousemove', handleMouseMove);
      } else {
        setIsVisible(true);
        div.removeEventListener('mousemove', handleMouseMove);
      }
    }

    return () => {
      div?.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isPlaying]);

  return {
    isVisible,
    ref,
  };
}
