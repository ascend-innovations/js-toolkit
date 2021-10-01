module.exports = {
	extends: ['@ascend-innovations/eslint-config/react', './index'],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx', 'ts', '.tsx', '.mdx'] },
		],
	},
};
