import { LOCALES } from '@/constants/config';
import { getAbsoluteUrl } from '@/utils/url';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  let result: MetadataRoute.Sitemap = [];

  LOCALES.map((locale) => {
    result = [
      ...result,
      {
        url: getAbsoluteUrl(`/${locale}`),
      },
    ];
  });

  return result;
}
