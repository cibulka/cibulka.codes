import dayjs from 'dayjs';
import { Job, Position as PositionType } from 'contentlayer/generated';

import { Locale } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';

export async function Position(props: {
  job?: Job;
  locale: Locale;
  position: PositionType;
  classNameTitle?: string;
}) {
  const { t } = await getTranslationServer('common', props.locale);
  const { start, end } = props.job || {};
  const startYear = start ? dayjs(start).format('YYYY') : undefined;
  const endYear = end ? dayjs(end).format('YYYY') : undefined;
  return (
    <>
      <span className="font-bold">{props.position.title}</span>
      {startYear && (
        <>
          {` `}
          <span>
            {startYear === endYear
              ? startYear
              : [startYear, end ? endYear : t('present')].join(' – ')}
          </span>
        </>
      )}
    </>
  );
}
