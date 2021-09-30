module.exports = {
  extends: [
    'airbnb',
    './rules/base',
    './rules/import',
  ],

  plugins: ['html'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
};
