'use client'

import type { PropsWithChildren, ReactNode } from 'react'
import {
	Arrow,
	Content,
	Portal,
	Root,
	Trigger,
} from '@radix-ui/react-hover-card'
import * as stylex from '@stylexjs/stylex'

import { color, spacing } from '../../globalTokens.stylex'
import Link from '../link'

const styles = stylex.create({
	content: {
		backgroundColor: color.white,
		border: `solid 1px ${color.red}`,
		borderRadius: '8px',
		color: color.black,
		height: '240px',
		maxWidth: '640px',
		padding: spacing.sm,
		position: 'absolute',
		overflow: 'auto',
	},
	arrow: {
		fill: color.white,
	},
})

type HoverCardType = {
	trigger: ReactNode
	color: string
} & PropsWithChildren

export default function HoverCardWrapper({
	trigger,
	color,
	children,
}: HoverCardType) {
	return (
		<Root>
			<Trigger asChild>
				<Link href={`/h/${color}`}>{trigger}</Link>
			</Trigger>
			{/* <Portal> */}
				<Content>
					<div {...stylex.props(styles.content)}>{children}</div>
					<Arrow {...stylex.props(styles.arrow)} />
				</Content>
			{/* </Portal> */}
		</Root>
	)
}
