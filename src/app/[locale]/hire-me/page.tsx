import { BusinessCard } from '@/sections/business-card/BusinessCard';
import { isLocale } from '@/utils/typeguards';
import { LOCALES } from '@/constants/config';

export default function HireMePage(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : LOCALES[0];
  return (
    <div className={['absolute inset-0', 'flex items-center justify-center', 'p-4'].join(' ')}>
      <div className="max-w-xl w-full rounded-md border border-button_shade p-4 bg-button">
        <BusinessCard locale={locale} />
      </div>
    </div>
  );
}
