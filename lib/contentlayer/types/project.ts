import { defineDocumentType, defineNestedType } from 'contentlayer/source-files';

import { getLocale, getSlug, getUrl } from '../utils/locale';

const DIR = 'project';

export const Job = defineNestedType(() => ({
  name: 'Job',
  fields: {
    slug: { type: 'string', required: true },
    start: { type: 'date' },
    end: { type: 'date' },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
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
    www: {
      type: 'string',
    },
    video: {
      type: 'string',
    },
    video_poster: {
      type: 'string',
    },
    demo: {
      type: 'string',
    },
    skills: {
      type: 'list',
      of: { type: 'string' },
    },
    positions: {
      type: 'list',
      of: Job,
    },
    priority: {
      type: 'number',
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
