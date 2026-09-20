/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dr-naresh-gupta' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
