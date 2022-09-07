module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jest': true
	},

	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'prettier',
	],
	'rules': {
		'no-use-before-define': 0,
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/prop-types': 0,
		'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
		'react/react-in-jsx-scope': 0
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		// 'linebreak-style': [
		// 	'error',
		// 	'unix'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		// 'semi': [
		// 	'error',
		// 	'always'
		// ]
	}
};
