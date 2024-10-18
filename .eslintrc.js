// @ts-check

import eslint from '@eslint/js'
import stylex from "@stylexjs/eslint-plugin"
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
	{
		plugins: {
			stylex
		}
	}
);
