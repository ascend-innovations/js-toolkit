module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/base',
        './rules/import',
        './rules/prettier'
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

    plugins: ['html'],

    rules: {},
};
