module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier/react'].map(require.resolve),
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 4,
        semi: true,
      },
    ],
  },
};