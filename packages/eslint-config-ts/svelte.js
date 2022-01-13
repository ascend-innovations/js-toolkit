const path = require('path');

module.exports = {
    extends: ['@ascend-innovations/eslint-config/svelte'],
    overrides: [
        {
            files: '**/*.svelte',
            parser: '@typescript-eslint/parser',
            extends: [
                'airbnb-typescript',
                'plugin:@typescript-eslint/recommended',
                require.resolve('./rules/typescript'),
                // We need to include prettier again here to make sure our prettier rules take precedence over typescript recommended rules
                '@ascend-innovations/eslint-config/rules/prettier',
            ],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.eslint.json'), // https://github.com/microsoft/vscode-eslint/issues/1170
                tsconfigRootDir: './',
            },
        },
    ],
};
