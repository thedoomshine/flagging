import type { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'
import * as stylex from '@stylexjs/stylex'
import type {
	CompiledStyles,
	StyleXArray,
} from '@stylexjs/stylex/lib/StyleXTypes'

import { color, font } from '../globalTokens.stylex'

const styles = stylex.create({
	link: {
		fontFamily: font.title,
		fontWeight: 900,
		whiteSpace: 'nowrap',
		':hover': {
			textDecorationLine: 'underline',
			textDecorationColor: color.red,
		},
	},
})

type Link = {
	stylesArr?: StyleXArray<
		boolean | CompiledStyles | readonly [CompiledStyles] | null | undefined
	>
	href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ children, href, stylesArr, ...props }: Link) {
	return (
		<NextLink
			href={href}
			{...stylex.props(styles.link, stylesArr)}
			{...props}
		>
			{children}
		</NextLink>
	)
}
