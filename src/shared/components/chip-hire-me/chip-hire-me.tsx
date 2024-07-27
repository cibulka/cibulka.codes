import { HireMe } from '@/modules/hire-me/page';

import { getIntl } from '@/shared/i18n/get-intl';
import { hireMeMessage } from '@/shared/messages';
import { PropsWithLocale } from '@/types/params';
import { ChipHireMeLayout } from './layout';

export async function ChipHireMe(props: PropsWithLocale<{ className?: string }>) {
  const { formatMessage } = await getIntl(props.locale);

  return (
    <ChipHireMeLayout label={formatMessage(hireMeMessage)}>
      <HireMe locale={props.locale} />
    </ChipHireMeLayout>
  );
}
