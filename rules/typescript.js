module.exports = {
    extends: ['prettier/@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json', // AirBnB defines this, but we should have control.
    },
};
