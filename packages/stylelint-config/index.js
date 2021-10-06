module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-declaration-strict-value', 'stylelint-order'],
    rules: {
        // cannot use arbitrary values for the defined properties.
        "scale-unlimited/declaration-strict-value": [
            ["/color$/", 'fill', 'font-size', '/margin$/', '/padding$/', 'stroke', 'z-index'],
            {
                ignoreValues: [ 'currentColor', 'inherit', 'transparent']
            }
        ],
        'order/properties-alphabetical-order': true,
        "custom-property-empty-line-before": "never",
        'color-hex-length': 'long',
        'color-hex-case': 'upper',
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
        ],
        'indentation': 4
    },
    ignoreFiles: ['node_modules']
}