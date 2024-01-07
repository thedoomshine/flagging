/** @type {import('next').NextConfig} */
// require('./src/env.js')
const stylexPlugin = require('@stylexjs/nextjs-plugin')
const withMDX = require('@next/mdx')()
const babelrc = require('./babel.config.js')
const plugins = babelrc.plugins
const [_, options] = plugins.find(
	(plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin'
)

const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname

const config = {
	// reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: {
					loader: '@svgr/webpack',
					options: {
						svgo: false,
					},
				},
			},
		)

		return config
	}
}

module.exports = stylexPlugin({
	rootDir,
	useCSSLayers: true,
})(withMDX(config))
