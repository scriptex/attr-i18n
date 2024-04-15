import prettier from 'eslint-config-prettier';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			prettier,
			tsEsLint
		},
		ignores: ['*.js', '*.mjs'],
		rules: {
			'no-console': 'error'
		}
	}
];
