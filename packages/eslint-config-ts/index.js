module.exports = {
  extends: ['@ascend-innovations/eslint-config'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts'], // Apply overrides for typescript files only
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./rules/typescript'),
      ],
      parserOptions: {
        project: ['tsconfig.eslint.json'], // https://github.com/microsoft/vscode-eslint/issues/1170
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
