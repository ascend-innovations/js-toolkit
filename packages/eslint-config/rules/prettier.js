module.exports = {
    // In general anything in the "rules" dir should only contain rules, but
    // prettier and our rules always need to appear in this order so we are
    // including the plugin here
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                endOfLine: 'lf',
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                semi: true,
            },
            {
                usePrettierrc: false,
            },
        ],
    },
};
