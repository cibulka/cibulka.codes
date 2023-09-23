import path from 'path';
import { Skill as SkillType } from 'contentlayer/generated';
import { defineDocumentType } from 'contentlayer/source-files';

import { getLocale, getSlug, getUrl } from '../utils/locale';

const DIR = 'skill';

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: `${DIR}/*/*/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    past: {
      type: 'boolean',
    },
    future: {
      type: 'boolean',
    },
    priority: {
      type: 'number',
    },
    level: {
      type: 'string',
    },
  },
  computedFields: {
    category: {
      type: 'string',
      required: true,
      resolve: (post: SkillType) => {
        const dirname = path.dirname(post._raw.sourceFilePath);
        const result = dirname.split('/')[1];
        return result;
      },
    },
    locale: {
      type: 'string',
      required: true,
      resolve: getLocale,
    },
    slug: {
      type: 'string',
      required: true,
      resolve: getSlug,
    },
    url: {
      type: 'string',
      required: true,
      resolve: (p) => getUrl(p, DIR),
    },
  },
}));
