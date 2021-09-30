const path = require('path');

module.exports = {
  extends: ['@ascend-innovations/eslint-config'],
  overrides: [
    {
      files: '**/*.+(ts|tsx)', // Apply overrides for typescript files only
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        './rules/typescript',
      ],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.eslint.json'), // https://github.com/microsoft/vscode-eslint/issues/1170
        tsconfigRootDir: './',
      },
    },
  ],
};
