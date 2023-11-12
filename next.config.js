/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/assessment/general',
        permanent: true,
        basePath: false
      }
    ];
  }
};

module.exports = nextConfig;
