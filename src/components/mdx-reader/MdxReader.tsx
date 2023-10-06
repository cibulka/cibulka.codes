import { useMDXComponent } from 'next-contentlayer/hooks';

import { Locale } from '@/constants/config';
import { getComponents } from '@/content/getComponents';

export function MdxReader(props: { mdx: string; locale: Locale }) {
  const MDXContent = useMDXComponent(props.mdx);
  const components: any = getComponents(props.locale);
  return <MDXContent components={components} />;
}
