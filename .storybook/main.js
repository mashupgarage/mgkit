module.exports = {
  stories: ['../src/components/**/*.stories.@(js|ts|tsx|mdx)'],
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocGen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
}
