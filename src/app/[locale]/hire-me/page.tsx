import { notFound } from 'next/navigation';

import { BusinessCard } from '@/components/business-card/BusinessCard';
import { isLocale } from '@/utils/typeguards';

export default function HireMePage(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : null;
  if (!locale) notFound();
  return (
    <div className={['absolute inset-0', 'flex items-center justify-center', 'p-4'].join(' ')}>
      <div className="max-w-xl w-full rounded-md border border-button_shade p-4 bg-button">
        <BusinessCard locale={locale} />
      </div>
    </div>
  );
}
