const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-scss',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
        }
      }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-storysource'
  ],
  // Add nextjs preset
  presets: [path.resolve(__dirname, './next-preset.js')]
};
