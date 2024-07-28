import { MetadataRoute } from 'next';

import { LOCALES } from '@/shared/i18n/config';
import { getAbsoluteUrl } from '@/utils/url';

export default function sitemap(): MetadataRoute.Sitemap {
  let result: MetadataRoute.Sitemap = [];

  LOCALES.map((locale) => {
    result = [
      ...result,
      {
        url: getAbsoluteUrl(`/${locale}`),
        priority: 1,
      },
      {
        url: getAbsoluteUrl(`/${locale}/cv`),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: getAbsoluteUrl(`/${locale}/hire-me`),
        priority: 0.5,
      },
      {
        url: getAbsoluteUrl(`/${locale}/readme`),
        priority: 0.5,
      },
    ];
  });

  result = result.map((item) => ({
    ...item,
    lastModified: new Date(),
  }));

  return result;
}
