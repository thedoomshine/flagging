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

import { color, spacing, ui } from '../../globalTokens.stylex'
import Link from '../link'

const styles = stylex.create({
	wrapper: {
		maxHeight: '320px',
		maxWidth: '480px',
		height: '100dvh',
		width: '100dvw',
		overflow: 'auto',
		left: '0',
		scrollbarColor: `${color.gray} transparent`,
		"::-webkit-scrollbar": {
			backgroundColor: 'transparent',
		},
		"::-webkit-scrollbar-thumb": {
			backgroundColor: color.gray,
		}
	},
	content: {
		backgroundColor: '#000',
		borderRadius: '8px',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr auto',
		alignContent: 'center',
		justifyContent: 'center',
		padding: spacing.sm,
	},
	arrow: {
		height: '16px',
		width: '24px',
		fill: ui.black,
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
				<span {...stylex.props(styles.wrapper)}>
					<Link href={`/h/${color}`}>{trigger}</Link>
				</span>
			</Trigger>
			<Portal>
				<Content align='start' {...stylex.props(styles.wrapper)}>
					<div {...stylex.props(styles.content)}>
						{children}
						<Arrow {...stylex.props(styles.arrow)} />
					</div>
				</Content>
			</Portal>
		</Root>
	)
}
