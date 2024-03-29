const path = require('path')

module.exports = {
	presets: ['next/babel'],
	plugins: [
		[
			'@stylexjs/babel-plugin',
			{
				dev: process.env.NODE_ENV === 'development',
				genConditionalClasses: true,
				treeshakeCompensation: true,
				unstable_moduleResolution: {
					type: 'commonJS',
					rootDir: path.join(__dirname, '../..'),
				},
			},
		],
		['@babel/plugin-transform-private-methods'],
	],
	compact: true,
}
