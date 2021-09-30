module.exports = {
    extends: ['@ascend-innovations/eslint-config', './rules/typescript'].map(require.resolve),
    parserOptions: {
        project: './tsconfig.json'
    },
};
