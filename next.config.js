/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   trailingSlash: true,
// };

// export default nextConfig;

module.exports = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};
