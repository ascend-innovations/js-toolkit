module.exports = {
  extends: './',
  overrides: [
    {
      files: ['**/*.svelte'],
      extends: './svelte'
    },
    {
      files: [
        '**/*.jsx'
      ],
      extends: './react'
    }
  ]
};
