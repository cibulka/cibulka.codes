import { Locales } from '@/shared/i18n/config';
import { defineMessage, defineMessages } from '@formatjs/intl';

export const localeMessages = defineMessages({
  [Locales.CS]: {
    defaultMessage: 'Czech',
    id: 'CACPC+',
  },
  [Locales.EN]: {
    defaultMessage: 'English',
    id: 'WkrNSk',
  },
});

export const placeholderMessage = defineMessage({
  defaultMessage: 'Select language',
  id: 'eVlu1R',
});
