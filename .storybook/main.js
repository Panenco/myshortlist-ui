const { configureActions } = require('@storybook/addon-actions');
const webpack = require('webpack');
const paths = require('../config/paths');

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
  framework: '@storybook/react',
  stories: ['../stories/index.jsx'],

  webpackFinal: async (config, { configType }) => ({
    ...config,
    resolve: {
      ...config.resolve,
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', paths.src],
      alias: {
        config: paths.appConfig,
        static: paths.publicFiles,
        public: paths.publicFiles,
      },
    },
    module: {
      ...config.module,

      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/,
          exclude: [paths.publicFiles],
          loader: 'svg-sprite-loader',
        },
        {
          test: /\.css$/,
          sideEffects: true,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          sideEffects: true,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [paths.scss],
              },
            },
          ],
        },
        {
          include: [paths.publicFiles],
          loader: 'file-loader',
        },
      ],
    },
  }),
};
