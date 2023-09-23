import { defineDocumentType, defineNestedType } from 'contentlayer/source-files';

import { getLocale, getSlug, getUrl } from '../utils/locale';

const DIR = 'position';

export const Position = defineDocumentType(() => ({
  name: 'Position',
  filePathPattern: `${DIR}/*/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      resolve: getLocale,
      required: true,
    },
    slug: {
      type: 'string',
      resolve: getSlug,
      required: true,
    },
    url: {
      type: 'string',
      resolve: (p) => getUrl(p, DIR),
      required: true,
    },
  },
}));
