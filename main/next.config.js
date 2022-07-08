/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { BLOG_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/:path*`,
      },
    ];
  },
};
