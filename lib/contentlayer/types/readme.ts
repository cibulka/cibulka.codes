import { defineDocumentType } from 'contentlayer/source-files';

import { getLocale, getSlug } from '../utils/locale';

const DIR = 'readme';

export const Readme = defineDocumentType(() => ({
  name: 'Readme',
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
