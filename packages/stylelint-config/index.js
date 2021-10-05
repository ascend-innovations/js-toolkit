modules.export = {
    extends: [
        'stylelint-config-recommended',
    ],
    rules: {
        'color-hex-length': 'long',
        'color-named': 'never',
        'unit-allowed-list': [
            'px',
            'rem',
            's',
            'deg',
            '%',
            'vh',
            'vw',
            'fr'
        ]
    },
    ignoreFiles: ['node_modules']
}