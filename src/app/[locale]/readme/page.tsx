import { LayoutPaper } from '@/components/layout-paper/LayoutPaper';
import { Locale } from '@/constants/config';
import { Readme } from '@/sections/readme/Readme';

export default function ReadMePage(props: { params: { locale: Locale } }) {
  return (
    <LayoutPaper isRoute>
      <Readme isRoute locale={props.params.locale} />
    </LayoutPaper>
  );
}
