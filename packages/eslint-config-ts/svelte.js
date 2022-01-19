module.exports = {
  extends: ['@ascend-innovations/eslint-config/svelte'],
  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': () => require('typescript'),
  },
};
