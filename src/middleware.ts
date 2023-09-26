import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

import { LOCALES } from '@/constants/config';

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
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-path', pathname);

  const isWorkbox = pathname.startsWith('/workbox');
  if (isWorkbox) return NextResponse.next();

  const isFile = !pathname.split('.').pop()?.startsWith('/');
  if (isFile) return NextResponse.next();

  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  if (pathnameIsMissingLocale) {
    const locale = getBestLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/_vercel|static|_next/image|assets|favicon.ico|sw.js).*)'],
};
