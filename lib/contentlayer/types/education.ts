import { defineDocumentType } from 'contentlayer2/source-files';

import { getLocale, getSlug, getUrl } from '../utils/locale';

import { Job } from './project';

const DIR = 'education';

export const Education = defineDocumentType(() => ({
  name: 'Education',
  filePathPattern: `${DIR}/*/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    positions: {
      type: 'list',
      of: Job,
    },
    www: {
      type: 'string',
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
