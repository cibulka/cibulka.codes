import { defineDocumentType } from 'contentlayer2/source-files';

import { getLocale, getSlug } from '../utils/locale';

const DIR = 'block';

export const Block = defineDocumentType(() => ({
  name: 'Block',
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
  },
}));
