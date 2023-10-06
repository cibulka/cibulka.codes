import { BusinessCard } from '@/sections/business-card/BusinessCard';
import { getServerLocale } from '@/utils/locale';

export default function HireMeModal(props: { params: { locale: string } }) {
  const locale = getServerLocale(props.params.locale);
  return <BusinessCard locale={locale} />;
}
