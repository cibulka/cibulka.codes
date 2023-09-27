import { Locale } from '@/constants/config';
import { Readme } from '@/sections/readme/Readme';

export default function ReadMePage(props: { params: { locale: Locale } }) {
  return <Readme isRoute locale={props.params.locale} />;
}
