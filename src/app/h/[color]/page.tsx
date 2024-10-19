import * as stylex from '@stylexjs/stylex'
import type { MDXContent } from 'mdx/types'

import Hanky from '../../_components/hanky'

type PageProps = {
	params: {
		color: string
	}
}

export type MDXMetaProps = {
	kink: string
	left: string
	right: string
	name: string
	hex: string
	pattern?: string
	snippet: HTMLParagraphElement
}

export type MDXModuleProps = {
	default: MDXContent
	Preview: MDXContent
	meta: MDXMetaProps
}

const styles = stylex.create({
	hanky: ({
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
			<h1>{meta.kink}</h1>
			<Hanky pattern={meta.pattern} fill={meta.hex} {...stylex.props(styles.hanky)} />
			<MDXComponent {...props} />
		</>
	)
}
