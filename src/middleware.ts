import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

import { LOCALES, X_HEADER_LOCALE } from '@/constants/config';
import { isLocale } from './utils/typeguards';

function getBestLocale(request: NextRequest) {
  const headers = {
    'Accept-Language': request.headers.get('Accept-Language') || '',
  };
  const languages = new Negotiator({
    headers,
  }).languages([...LOCALES]);
  return languages[0];
}

export async function middleware(request: NextRequest) {
  const localeBest = getBestLocale(request);
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  const isFile = !pathname.split('.').pop()?.startsWith('/');
  if (isFile) return response;

  const isIcon = pathname.startsWith('/icon');
  if (isIcon) return response;

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${localeBest}/${pathname}`, request.url));
  }

  const localeProvided = pathname.split('/').filter(Boolean)[0];
  const locale = isLocale(localeProvided) ? localeProvided : LOCALES[0];
  response.headers.set(X_HEADER_LOCALE, locale);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/_vercel|static|_next/image|assets|favicon.ico|sw.js).*)'],
};
