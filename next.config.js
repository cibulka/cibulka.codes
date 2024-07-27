/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
const NextBundleAnalyzer = require('@next/bundle-analyzer');
const { transform } = require('@formatjs/ts-transformer');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/cv.pdf',
        destination: '/cv-petr_cibulka-:locale.pdf',
        permanent: true,
      },
      /*
      {
        source: '/cv',
        destination: '/cv-petr_cibulka-en.pdf',
        permanent: true,
      },
      */
      {
        source: '/cv.pdf',
        destination: '/cv-petr_cibulka-en.pdf',
        permanent: true,
      }
    ];
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withContentlayer(withBundleAnalyzer(nextConfig));
