module.exports = {
  extends: ['@ascend-innovations/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.eslint.json'], // https://github.com/microsoft/vscode-eslint/issues/1170
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./rules/typescript')
      ],
    },
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', 'ts', '.tsx', '.mdx'] },
    ],
  },
};
