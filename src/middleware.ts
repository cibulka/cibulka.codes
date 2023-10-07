import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

import { X_HEADER_LOCALE } from '@/constants/headers';
import { LOCALES } from '@/constants/config';
import { isLocale } from '@/utils/typeguards';
import { joinPathname } from '@/utils/url';

function getBestLocale(request: NextRequest) {
  const headersValue = request.headers.get('Accept-Language');
  if (!headersValue) return LOCALES[0];
  const headers = { 'accept-language': headersValue };
  const languages = new Negotiator({ headers }).languages();
  const result = match(languages, LOCALES, LOCALES[0]);
  return result;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeProvided = pathname.split('/').filter(Boolean)[0];
  const localeValid = localeProvided && isLocale(localeProvided) ? localeProvided : null;

  if (localeValid) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(X_HEADER_LOCALE, localeValid);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const isFile = !pathname.split('.').pop()?.startsWith('/');
  if (isFile) return;

  const isIcon = pathname.startsWith('/icon');
  if (isIcon) return;

  const isAppleIcon = pathname.startsWith('/apple-touch-icon');
  if (isAppleIcon) return;

  const isManifest = pathname.includes('site.webmanifest');
  if (isManifest) return;

  const localeBest = getBestLocale(request);
  request.nextUrl.pathname = joinPathname(localeBest, pathname);
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/_vercel|static|_next/image|assets|favicon.ico|sw.js).*)'],
};
