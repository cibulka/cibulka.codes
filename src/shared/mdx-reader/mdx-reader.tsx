import { useMDXComponent } from 'next-contentlayer2/hooks';

import { Locale } from '@/shared/i18n/types';
import { getComponents } from './get-components';

export function MdxReader(props: { mdx: string; locale: Locale }) {
  const MDXContent = useMDXComponent(props.mdx);
  const components: any = getComponents(props.locale);
  return <MDXContent components={components} />;
}
