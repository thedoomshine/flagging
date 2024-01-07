module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	printWidth: 80,
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
		'^(next/(.*)$)|^(next$)',
		'^(expo(.*)$)|^(expo$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^~/',
		'^[../]',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '4.4.0',
}