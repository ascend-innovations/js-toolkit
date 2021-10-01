module.exports = {
    extends: ['plugin:jsx-a11y/recommended'],
    rules: {
        'jsx-a11y/accessible-emoji': 0,
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'either',
            },
        ],
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
    },
};
