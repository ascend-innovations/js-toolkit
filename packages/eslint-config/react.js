module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        require.resolve('./rules/base'),
        require.resolve('./rules/import'),
        require.resolve('./rules/react'),
        require.resolve('./rules/react-a11y'),
        require.resolve('./rules/prettier'),
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            rootMode: 'upward-optional',
            presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['html', 'jsx-a11y'],
    globals: {
        React: true,
        JSX: true,
    },
};
