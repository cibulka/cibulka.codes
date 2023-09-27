import { LOCALES } from '@/constants/config';
import { isLocale } from '@/utils/typeguards';

export default function ReadMeModal(props: { params: { locale: string } }) {
  const locale = isLocale(props.params.locale) ? props.params.locale : LOCALES[0];
  return <div>I AM README MODAL {locale}</div>;
}
