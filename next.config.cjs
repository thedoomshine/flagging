/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
import("./src/env.js")
import stylexPlugin from '@stylexjs/nextjs-plugin'
/** @type {import("next").NextConfig} */
const config = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default stylexPlugin({
	rootDir: __dirname,
})(config)
