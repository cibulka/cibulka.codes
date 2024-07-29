'use client';

import dayjs from 'dayjs';
import { useIntl } from 'react-intl';

import { EXPERIENCE_START } from '@/constants/config';

import { yearMessage } from './messages';

export function YearsOfExperience() {
  const { formatMessage } = useIntl();
  const years = dayjs(new Date()).diff(new Date(EXPERIENCE_START), 'years');
  return <>{formatMessage(yearMessage, { itemCount: years, plural: years })}</>;
}
