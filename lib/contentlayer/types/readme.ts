import { defineDocumentType } from 'contentlayer2/source-files';

import { getLocale, getSlug } from '../utils/locale';

const DIR = 'readme';

export const Readme = defineDocumentType(() => ({
  name: 'Readme',
  filePathPattern: `${DIR}/*/*.mdx`,
  contentType: 'mdx',
  fields: {},
  computedFields: {
    locale: {
      type: 'string',
      required: true,
      resolve: getLocale,
    },
    slug: {
      type: 'string',
      resolve: getSlug,
      required: true,
    },
  },
}));
