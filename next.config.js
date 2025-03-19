/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  distDir: 'build',
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/picture-reader',
  reactStrictMode: true,
  i18n,
  webpack: (config) => {
    const newConfig = {
      ...config,
    };
    newConfig.resolve.fallback = { fs: false };

    return newConfig;
  },
  // 确保i18n配置正确加载
});
