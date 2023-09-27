import { ErrorView } from '@/components/error-view/ErrorView';
import { LayoutPaper } from '@/components/layout-paper/LayoutPaper';
import { MdxReader } from '@/components/mdx-reader/MdxReader';
import { Locale } from '@/constants/config';
import { getDocuments } from '@/content/getDocuments';

export function Readme(props: { isRoute?: boolean; locale: Locale }) {
  const readme = getDocuments(['Readme'], props.locale).find((doc) => doc.slug === 'readme');

  return (
    <LayoutPaper isRoute={Boolean(props.isRoute)}>
      {readme ? (
        <MdxReader mdx={readme.body.code} locale={props.locale} />
      ) : (
        <ErrorView locale={props.locale} />
      )}
    </LayoutPaper>
  );
}
