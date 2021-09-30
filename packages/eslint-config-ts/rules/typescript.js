module.exports = {
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['warn'], // fixes https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    '@typescript-eslint/no-empty-interface': ['warn'], // warn about this but don't throw an error because we sometimes use empty interfaces as placeholders while scaffolding out functionality
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      // Enforce that boolean variables are prefixed with an allowed verb
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
    ],
  },
};
