import { DOMAIN_FULL } from '@/constants/url';
import { LOCALES } from '@/shared/i18n/config';
import { Locale } from '@/shared/i18n/types';

export function isAbsoluteUrl(url: string) {
  // Create a regular expression to match absolute URLs
  const absoluteUrlRegex = /^(?:\w+:)?\/\/(\S+)$/;

  // Test the link against the regex
  if (absoluteUrlRegex.test(url)) {
    return true;
  }

  // Create a regular expression to match relative URLs
  const relativeUrlRegex = /^[\w\/\-]+(\.[\w\/\-]+)*$/;

  // Test the link against the regex
  if (relativeUrlRegex.test(url)) {
    return false;
  }

  // Protocol
  const protocols = ['mailto:', 'tel:', 'sms:'];
  for (const protocol of protocols) {
    if (url.startsWith(protocol)) return true;
  }

  // Hash
  if (url.startsWith('#')) {
    return false;
  }

  throw new Error(`Weird URL ${url}.`);
}

export function isRelativeFileUrl(href: string) {
  return href.split('/').slice(-1)[0].includes('.');
}

export function joinPathname(...parts: (string | undefined)[]) {
  return parts
    .filter(Boolean)
    .map((p) => p?.replace(/^\/|\/$/g, ''))
    .filter(Boolean)
    .join('/');
}

export function getAbsoluteUrl(pathname?: string) {
  return joinPathname(DOMAIN_FULL, pathname || '');
}

export function getUrlLabel(href: string) {
  try {
    const url = new URL(href);
    return [url.hostname, url.pathname]
      .map((str) => str.replace(/^\/+/, ''))
      .map((str) => str.replace(/\/+$/, ''))
      .filter(Boolean)
      .join('/');
  } catch (e) {
    return `Invalid url ${href}.`;
  }
}

export function stripLocaleFromHref(href: string) {
  let result = href;

  // Strip leading slash
  result = result.replace(/^\//, '');

  // Strip locale
  const regex = new RegExp(`^(?:${LOCALES.join('|')})\\s*`, 'i');
  return result.replace(regex, '');
}

export function getLocalizedUrl(href: string, locale: Locale) {
  return `/${locale}/${stripLocaleFromHref(href)}`;
}
