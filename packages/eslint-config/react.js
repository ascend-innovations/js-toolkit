module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        require.resolve('./rules/base'),
        require.resolve('./rules/import'),
        require.resolve('./rules/react'),
        require.resolve('./rules/react-a11y'),
        'prettier/react',
        'plugin:prettier/recommended',
        require.resolve('./rules/prettier'),
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            rootMode: 'upward-optional',
        },
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['html', 'jsx-a11y'],
    env: {
        jsx: true,
    },
    globals: {
        React: true,
        JSX: true,
    },
};
