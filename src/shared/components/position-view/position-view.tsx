import { Job, Position as PositionType } from 'contentlayer/generated';
import dayjs from 'dayjs';

import { getIntl } from '@/shared/i18n/get-intl';
import { PropsWithLocale } from '@/types/params';

import { presentMessage } from './messages';

export async function PositionView(
  props: PropsWithLocale<{
    job?: Job;
    position: PositionType;
    classNameTitle?: string;
  }>,
) {
  const { formatMessage } = await getIntl(props.locale);
  const { start, end } = props.job || {};
  const startYear = start ? dayjs(start).format('YYYY') : undefined;
  const endYear = end ? dayjs(end).format('YYYY') : undefined;
  return (
    <>
      <span className="text-sm font-semibold">{props.position.title}</span>
      {startYear && (
        <>
          {` `}
          <span className="text-sm whitespace-nowrap">
            {startYear === endYear
              ? startYear
              : [startYear, end ? endYear : formatMessage(presentMessage)].join(' – ')}
          </span>
        </>
      )}
    </>
  );
}
