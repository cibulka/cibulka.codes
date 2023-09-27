import { notFound } from 'next/navigation';

import { BusinessCard } from '@/sections/business-card/BusinessCard';
import { isLocale } from '@/utils/typeguards';

export default function HireMeModal(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : null;
  if (!locale) notFound();
  return <BusinessCard locale={locale} />;
}
