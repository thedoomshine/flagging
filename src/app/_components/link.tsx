import type { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'
import * as stylex from '@stylexjs/stylex'

import { color, font } from '../globalTokens.stylex'

const styles = stylex.create({
	link: {
		fontFamily: font.title,
		fontWeight: 900,
		textDecoration: 'underline',
		whiteSpace: 'nowrap',
		':hover': {
			textDecorationColor: color.red,
		},
	},
})

type Link = {
	href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ children, href, ...props }: Link) {
	return (
		<NextLink
			href={href}
			{...stylex.props(styles.link)}
			{...props}
		>
			{children}
		</NextLink>
	)
}
