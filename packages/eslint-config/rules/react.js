module.exports = {
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.mdx'] },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,

    // React Hooks Rules
    'react-hooks/exhaustive-deps': 'warn',
  },
};
