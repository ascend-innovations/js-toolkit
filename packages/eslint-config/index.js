module.exports = {
  extends: [
    'airbnb',
    './rules/base',
    './rules/import',
  ].map(require.resolve),

  plugins: ['html'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};