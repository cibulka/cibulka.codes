import { defineMessage, defineMessages } from '@formatjs/intl';

export const videoControlMessages = {
  fullScreen: defineMessages({
    on: {
      defaultMessage: 'Full screen',
      id: 'FZBGji',
    },
    off: {
      defaultMessage: 'Close',
      id: 'rbrahO',
    },
  }),
  mute: defineMessages({
    on: {
      defaultMessage: 'Mute',
      id: 'x82IOl',
    },
    off: {
      defaultMessage: 'Unmute',
      id: 'W9355R',
    },
  }),
  play: defineMessages({
    on: {
      defaultMessage: 'Play',
      id: 'J3ca41',
    },
    off: {
      defaultMessage: 'Pause',
      id: 'tFFMkF',
    },
  }),
};

export const emptyTimeMessage = defineMessage({
  defaultMessage: '--:--',
  id: 'o+rdb8',
});

export const timeMessage = defineMessage({
  defaultMessage: '{ currentTime } / { duration }',
  id: 'tHM6Fy',
});

export const replayMessage = defineMessage({
  defaultMessage: 'Replay',
  id: '5yUsUe',
});
