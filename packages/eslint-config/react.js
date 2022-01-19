module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    require.resolve('./rules/base'),
    require.resolve('./rules/import'),
    require.resolve('./rules/react'),
    require.resolve('./rules/react-a11y'),
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      rootMode: 'upward-optional',
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['html', 'jsx-a11y'],
  globals: {
    React: true,
    JSX: true,
  },
};
