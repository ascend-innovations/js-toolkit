module.exports = {
    extends: [require.resolve('./index')],
    env: {
        browser: false,
        es6: true,
        node: true,
    },
    rules: {
        'no-path-concat': 2,
        'no-process-exit': 2,
        'global-require': 2,
        'no-new-require': 2,
    },
};
