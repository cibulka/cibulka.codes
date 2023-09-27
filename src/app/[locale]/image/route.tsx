import { NextRequest } from 'next/server';

import { LOCALES } from '@/constants/config';
import { getTranslationServer } from '@/utils/getTranslationServer';
import { isLocale } from '@/utils/typeguards';

import { getImageResponse } from '../../(og)/getImageResponse';
import OgMain from '../../(og)/OgMain';
import { getHomeMeta } from '@/meta/home';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const localeProvided = searchParams.get('locale');
  const locale = localeProvided && isLocale(localeProvided) ? localeProvided : LOCALES[0];

  const { t } = await getTranslationServer('common', locale);
  const view = <OgMain title={t('name')} description={t('tagline')} />;
  return getImageResponse(view);
}
