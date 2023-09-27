import { LOCALES } from '@/constants/config';
import { BusinessCard } from '@/sections/business-card/BusinessCard';
import { isLocale } from '@/utils/typeguards';

export default function HireMeModal(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : LOCALES[0];
  return <BusinessCard locale={locale} />;
}
