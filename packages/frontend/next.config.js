// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next');
const { i18n } = require('../../next-i18next.config');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  reactStrictMode: false,
};

const plugins = [withNx];

const reduceCallback = (config, plugin) => plugin(config);

module.exports = plugins.reduce(reduceCallback, {
  ...nextConfig,
  i18n,
});
