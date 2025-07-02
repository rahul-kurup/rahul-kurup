import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: false,
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
            value: 'public, max-age=31536000, must-revalidate'
          }
        ]
      }
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
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
