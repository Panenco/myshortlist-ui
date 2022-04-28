module.exports = {
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-actions',
    '@storybook/addon-options',
    'storybook-readme/register',
  ],
};
