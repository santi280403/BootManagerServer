module.exports = {
	env: {
		node: true,
		es2022: true,
		commonjs: true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{ SwitchCase: 1, VariableDeclarator: 1 },
		],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-empty-function': ['error', { allow: ['constructors'] }],
		'no-empty': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
		eqeqeq: 'error',
		curly: 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'no-useless-escape': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ['*.ts', '*.mts', '*.cts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': [
					'error',
					{
						allowedNames: ['ignoredFunctionName', 'ignoredMethodName'],
					},
				],
			},
		},
	],
	ignorePatterns: ['node_modules/', 'build'],
}
