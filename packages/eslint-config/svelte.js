/**
 * ! This is not meant to be used as a standalone config, but rather imported
 * ! after other eslint configs are in place (ie for vanilla javascript)
 */
module.exports = {
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  plugins: ['svelte3'],
  ignorePatterns: ['*.cjs'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
