/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: false,
  reactStrictMode: true,
  compiler: { styledComponents: true },
  pageExtensions: ["p.tsx", "p.ts", "p.jsx", "p.js"],
  async rewrites() {
    return [
      {
        source: `/`,
        destination: "/home",
      },
      {
        source: `/resume`,
        destination: "/pdf/resume.pdf",
      },
    ];
  },
};

module.exports = nextConfig;
