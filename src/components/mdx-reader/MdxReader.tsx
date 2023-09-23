import { useMDXComponent } from 'next-contentlayer/hooks';

import { getComponents } from '@/content/getComponents';

export function MdxReader(props: { mdx: string; locale: string }) {
  const MDXContent = useMDXComponent(props.mdx);
  const components: any = getComponents(props.locale);
  return <MDXContent components={components} />;
}
