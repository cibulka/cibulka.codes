import { Readme } from '@/sections/readme/Readme';
import { getServerLocale } from '@/utils/locale';

export default function ReadMeModal(props: { params: { locale: string } }) {
  const locale = getServerLocale(props.params.locale);
  return <Readme locale={locale} />;
}
