/** @type {import('next').NextConfig} */

const stylexPlugin = require('@stylexjs/nextjs-plugin')
const createMDX = require('@next/mdx')
const remarkGFM = import('remark-gfm')
const babelrc = require('./babel.config.js')
const plugins = babelrc.plugins
const [_, options] = plugins.find(
	(plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin'
)

const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname

const withMDX = createMDX({
	remarkPlugins: [remarkGFM],
	rehypePlugins: [],
})

const config = {
	// reactStrictMode: true,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: {
				loader: '@svgr/webpack',
				options: {
					svgo: false,
				},
			},
		})

		config.module.rules.push({
			resourceQuery: /raw/,
			type: 'asset/source'
		})

		return config
	},
}

module.exports = stylexPlugin({
	rootDir,
	useCSSLayers: true,
})(withMDX(config))
