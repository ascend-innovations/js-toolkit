module.exports = {
    extends: [
        'airbnb/hooks',
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve),
    plugins: ['jsx-a11y'],
    rules: {},
};
