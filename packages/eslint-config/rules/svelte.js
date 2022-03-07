/**
 * Specific ESLint rules and overrides for Svelte Projects
 *
 * ! Conflicting rules between eslint-plugin-svelte3 & eslint-plugin-import
 * ! Ref: https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md#eslint-plugin-import
 */
module.exports = {
  rules: {

    /**
     * Svelte and its tools are a dev dependencies since they get compiled away.
     * We need to be able to import them without ESLint complaining.
     *
     * TODO: Get more specific with which dev dependencies we should be allowing.
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      },
    ],
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['*.svelte'],
      rules: {
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/first': 'off',
      },
    },
  ],

};
