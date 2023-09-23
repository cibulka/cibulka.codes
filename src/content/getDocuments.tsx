import {
  DocumentTypeNames,
  DocumentTypes,
  Project,
  Skill,
  allDocuments,
} from 'contentlayer/generated';

import { LOCALES } from '@/constants/config';
import { sortByDate, sortByLevel, sortByPriority } from './sortDocuments';

export function getDocuments(types: DocumentTypeNames[], locale: string) {
  const documents = allDocuments.filter((d) => types.includes(d.type));
  const slugs = Array.from(new Set(documents.map((d) => d.slug)));

  let result: DocumentTypes[] = [];
  for (let i = 0; i < slugs.length; i += 1) {
    const slug = slugs[i];
    const original = documents.find((doc) => doc.slug === slug && doc.locale === LOCALES[0]);
    if (!original) continue;

    let used: DocumentTypes | null = null;
    if (locale === LOCALES[0]) {
      used = original;
    } else {
      const localized = documents.find((doc) => doc.slug === slug && locale);
      used = {
        ...original,
        ...localized,
      };
    }

    if (used) result = [...result, used];
  }

  if (types.includes('Project') || types.includes('Education')) {
    result = (result as Project[]).sort(sortByDate);
  }
  if (types.includes('Project')) {
    result = (result as Project[]).sort(sortByPriority);
  }
  if (types.includes('Skill')) {
    result = (result as Skill[]).sort(sortByLevel);
  }

  return result;
}
