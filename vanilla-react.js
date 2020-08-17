module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/base',
        './rules/import',
        './rules/prettier',
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve),

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 2020,
    },

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    plugins: ['html', 'jsx-a11y'],

    rules: {},
};
