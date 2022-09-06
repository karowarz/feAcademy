module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'react'
	],
	rules: {}
};
