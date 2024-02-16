import * as stylex from '@stylexjs/stylex'
import type { MDXContent } from 'mdx/types'

import Hanky from '../../_patterns/default.svg'

type PageProps = {
	params: {
		color: string
	}
}

export type MDXModuleProps = {
	default: MDXContent
	Preview: MDXContent
	meta: {
		title: string
		left: string
		right: string
		name: string
		value: string
		pattern?: string
		snippet: HTMLParagraphElement
	}
}

const styles = stylex.create({
	hanky: (color: string) => ({
		'--hanky-bg': color,
		'--hanky-pattern': color,
		float: 'left',
		maxHeight: '2em',
	}),
})

export default async function Page({ params, ...props }: PageProps) {
	const { default: MDXComponent, meta } = (await import(
		`../_colors/${params.color}.mdx`
	)) as MDXModuleProps

	return (
		<>
			<h1>{meta.title}</h1>
			<Hanky {...stylex.props(styles.hanky(meta.value))} />
			<MDXComponent {...props} />
		</>
	)
}
