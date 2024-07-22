import { DocumentTypes } from 'contentlayer2/generated';
import path from 'path';

function getSlugAndLocale(post: DocumentTypes) {
  const basename = path.basename(post._raw.sourceFileName, '.mdx');
  const result = basename.split('.').filter(Boolean);
  if (result.length !== 2) {
    throw new Error(`getSlugAndLocale: Filename ${basename} must include locale.`);
  }
  return result as [string, string];
}

export function getUrl(post: DocumentTypes, type: string | null) {
  const [slug, locale] = getSlugAndLocale(post);
  return `/${[locale, type, slug].filter(Boolean).join('/')}`;
}

export function getLocale(post: DocumentTypes) {
  const [_, locale] = getSlugAndLocale(post);
  return locale;
}

export function getSlug(post: DocumentTypes) {
  const [slug] = getSlugAndLocale(post);
  return slug;
}
