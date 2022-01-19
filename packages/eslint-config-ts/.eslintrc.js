module.exports = {
  extends: './',
  overrides: [
    {
      files: ['*.svelte'],
      extends: './svelte'
    },
    {
      files: [
        '*.tsx'
      ],
      extends: './react'
    }
  ]
};
