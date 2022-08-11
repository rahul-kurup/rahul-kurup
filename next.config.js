const csp = `
  default-src 'self';
  script-src 'self' 'nonce-rAnd0m';
  child-src ${process.env.CSP_ORIGIN};
  style-src 'self' ${process.env.CSP_ORIGIN};
  font-src 'self';  
`;

/** @type {{key:string; value:string;}[]} */
const securityHeaders = [
  process.env.CSP_ENABLED === '1' && {
    key: 'Content-Security-Policy',
    value: csp.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
].filter(Boolean);

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  trailingSlash: false,
  reactStrictMode: true,
  compiler: { styledComponents: true },
  pageExtensions: ['p.tsx', 'p.ts', 'p.jsx', 'p.js'],
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|gif|woff|ttf)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          }
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `/`,
        destination: '/home'
      },
      {
        source: `/resume`,
        destination: '/pdf/resume.pdf'
      }
    ];
  }
  // async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   return {
  //     '/': { page: '/home' },
  //     '/home': { page: '/home' }
  // //     '/resume': { page: '/pdf/resume.pdf' }
  //   };
  // }
};

module.exports = nextConfig;
