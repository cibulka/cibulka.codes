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
    .map((p) => p.replace(/^\/|\/$/g, ''))
    .filter(Boolean)
    .join('/');
}

export function getAbsoluteUrl(pathname?: string) {
  const baseUrl = process.env.BASE_URL || process.env.VERCEL_URL;
  if (!baseUrl) throw new Error(`getAbsoluteUrl: Base URL not provided`);
  return joinPathname(baseUrl, pathname || '');
}

export function getUrlLabel(href: string) {
  try {
    const url = new URL(href);
    return (
      [url.hostname, url.pathname]
        .map((str) => str.replace(/^\/+/, ''))
        .map((str) => str.replace(/\/+$/, ''))
        // .map((str) => str.replace(/^www./, ''))
        .filter(Boolean)
        .join('/')
    );
  } catch (e) {
    return `Invalid url ${href}.`;
  }
}
