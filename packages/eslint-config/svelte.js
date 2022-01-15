module.exports = {
    extends: [
        'airbnb-base',
        require.resolve('./rules/base'),
        require.resolve('./rules/import'),
        require.resolve('./rules/prettier'),
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
    },
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    plugins: ['svelte3'],
};
