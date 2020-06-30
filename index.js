module.exports = {
    extends: [
        'eslint-config-airbnb-typescript',
        './rules/base',
        './rules/import',
        './rules/prettier',
        './rules/react',
        './rules/react-a11y',
        './rules/typescript',
    ].map(require.resolve),

    parser: '@typescript-eslint/parser',

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
