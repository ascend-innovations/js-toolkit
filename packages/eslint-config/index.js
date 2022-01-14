module.exports = {
    extends: [
        'airbnb-base',
        require.resolve('./rules/base'),
        require.resolve('./rules/import'),
        require.resolve('./rules/prettier'),
    ],
    ignorePatterns: ['*.cjs'],

    parser: '@babel/eslint-parser',

    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            rootMode: 'upward-optional',
        },
    },
    env: {
        browser: true,
        es6: true,
    },
};
