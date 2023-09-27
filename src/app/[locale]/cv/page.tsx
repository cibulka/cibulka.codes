import { Locale } from '@/constants/config';
import { Resume } from '@/sections/resume/Resume';

export default function ResumePage(props: { params: { locale: Locale } }) {
  const { locale } = props.params;
  return <Resume isRoute locale={locale} />;
}
