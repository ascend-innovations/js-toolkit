module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: ['@ascend-innovations/eslint-config/react'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'ts', '.tsx', '.mdx'] },
    ],
  },
};
