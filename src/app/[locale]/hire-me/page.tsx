import { Locale } from '@/constants/config';
import { BusinessCard } from '@/sections/business-card/BusinessCard';

export default function HireMePage(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  return (
    <div className={['absolute inset-0', 'flex items-center justify-center', 'p-4'].join(' ')}>
      <div className="max-w-xl w-full rounded-md border border-button_shade p-4 bg-button">
        <BusinessCard locale={locale} />
      </div>
    </div>
  );
}
