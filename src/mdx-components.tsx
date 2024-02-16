/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from './app/_components/link'
import * as stylex from '@stylexjs/stylex'
import type { StyleXVar } from '@stylexjs/stylex/lib/StyleXTypes'
import type { MDXComponents } from 'mdx/types'

import { font, text } from './app/globalTokens.stylex'

type TitleProps = {
	level: 1 | 2 | 3 | 4 | 5
}

const HEADING_LEVEL = Array.from({ length: 5 }, (_, i) => i + 1).reduce(
	(acc, level) => ({
		...acc,
		[`h${level}`]: {
			fontSize: (text as unknown as Record<string, StyleXVar<string>>)[
				`h${level}`
			],
		},
	}),
	{}
)

const styles = stylex.create({
	title: {
		fontFamily: font.title,
		fontWeight: 400,
		lineHeight: 0.9,
		marginBottom: '0.5em',
		letterSpacing: '-1px',
		textWrap: 'balance',
	},
	strong: {
		fontFamily: font.title,
		fontWeight: 900,
	},
	em: {
		fontStyle: 'italic',
	},
	paragraph: {
		marginTop: '1em',
		textWrap: 'pretty',
		width: '75%',
		':first-of-type': {
			marginTop: 0,
		},
	},
	fullParagraph: {
		width: '100%',
	},
	...HEADING_LEVEL,
})

function Title({
	children,
	level,
	...props
}: React.PropsWithChildren<TitleProps>) {
	const Heading = `h${level}` as React.ElementType
	return (
		<Heading
			{...stylex.props(
				styles.title,
				styles[`h${level}` as keyof typeof styles]
			)}
			{...props}
		>
			{children}
		</Heading>
	)
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ href, children }) => (
			<Link
				href={href ?? ''}
			>
				{children}
			</Link>
		),
		strong: (props) => (
			<strong
				{...stylex.props(styles.em)}
				{...props}
			/>
		),
		em: (props) => (
			<em
				{...stylex.props(styles.strong)}
				{...props}
			/>
		),
		p: (props) => (
			<p
				{...stylex.props(styles.paragraph)}
				{...props}
			/>
		),
		h1: (props) => (
			<Title
				level={1}
				{...props}
			/>
		),
		h2: (props) => (
			<Title
				level={2}
				{...props}
			/>
		),
		h3: (props) => (
			<Title
				level={3}
				{...props}
			/>
		),
		h4: (props) => (
			<Title
				level={4}
				{...props}
			/>
		),
		h5: (props) => (
			<Title
				level={5}
				{...props}
			/>
		),
		...components,
	}
}
