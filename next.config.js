/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    // Add the following line to enable reactStrictMode
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };

    return config;
  },
});