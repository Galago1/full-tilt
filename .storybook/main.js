module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode/register'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  features: {
    // This config speeds up individual story renders,
    // but breaks the storyshots tests
    // storyStoreV7: true
    emotionAlias: false,
    modernInlineRender: false
  }
  // include: /dist/,
  // exclude: /node_modules/
};
