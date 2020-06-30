const path = require('path');

module.exports = {
  stories: [
    '../src/app/pages/**/*.stories.tsx',
    '../src/app/domains/**/*.stories.tsx',
    '../src/app/sharedComponents/**/*.stories.tsx',
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-xd-designs/register',
    'react-storybook-addon-chapters',
  ],
};
