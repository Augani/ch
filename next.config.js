const withImages = require('next-images');

module.exports = (phase, { defaultConfig }) => {
  return withImages({
    esModule: true,
    pageExtensions: ['tsx']
  });
};
