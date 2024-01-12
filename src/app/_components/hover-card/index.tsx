import { type PropsWithChildren } from 'react'
import HoverCardWrapper from './hover-card-wrapper'
import MDXComponent from './mdx-component'

type HoverCardType = {
	color: string
} & PropsWithChildren

export default function HoverCard({ children, color }: HoverCardType) {
	return (
		<HoverCardWrapper
			color={color}
			trigger={children}
		>
			<MDXComponent color={color} />
		</HoverCardWrapper>
	)
}
