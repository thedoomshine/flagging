import type { PropsWithChildren } from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import * as stylex from '@stylexjs/stylex'

import { color } from '../globalTokens.stylex'
import Link from './link'

const styles = stylex.create({
	content: {
		borderRadius: '6px',
		padding: '20px',
		width: '300px',
		backgroundColor: color.white,
		boxShadow:
			'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
		animationDuration: '400ms',
		animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
		willChange: 'transform, opacity',
		['data-side=top']: {
			animationName: 'slideDownAndFade',
		},
		['data-side=right']: {
			animationName: 'slideLeftAndFade',
		},
		['data-side=bottom']: {
			animationName: 'slideUpAndFade',
		},
		['data-side=left']: {
			animationName: 'slideRightAndFade',
		},
	},
	arrow: {
		fill: color.white,
	},
})

type HoverCardType = {
	href: string
} & PropsWithChildren

const HoverCardDemo = ({ children, href }: HoverCardType) => (
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			<Link href={href}>{children}</Link>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content
				sideOffset={5}
        {...stylex.props(styles.content)}
			>
				
				<HoverCard.Arrow {...stylex.props(styles.arrow)} />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
)

export default HoverCardDemo
