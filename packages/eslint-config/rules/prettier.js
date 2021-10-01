module.exports = {
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
