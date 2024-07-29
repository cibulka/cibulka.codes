'use client';

import dayjs from 'dayjs';
import { useIntl } from 'react-intl';

import { EXPERIENCE_START } from '@/constants/config';

import { yearMessage } from './messages';

const years = dayjs(new Date()).diff(new Date(EXPERIENCE_START), 'years');

export function YearsOfExperience() {
  const { formatMessage } = useIntl();
  return (
    <>
      {years} {formatMessage(yearMessage, { itemCount: years, plural: years })}
    </>
  );
}
