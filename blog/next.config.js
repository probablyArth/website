const withMDX = require("@next/mdx")();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = withMDX({
  pageExtensions: ["tsx", "mdx"],
});
