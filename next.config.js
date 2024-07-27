/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');
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


module.exports = withContentlayer(nextConfig);
