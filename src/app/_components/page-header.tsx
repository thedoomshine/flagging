import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'

import Logo from '../_patterns/default.svg'
import { color, font, spacing } from '../globalTokens.stylex'

const styles = stylex.create({
	header: {
		display: 'grid',
		backgroundColor: color.black,
		fontFamily: font.title,
		fontSize: '2rem',
		gridColumn: 'content / right-gutter',
		padding: `${spacing.md} 0`,
		gridRow: 'header',
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		gap: spacing.xs,
		position: 'relative',
	},
	title: {
		backgroundColor: color.black,
		lineHeight: 0.9,
		position: 'relative',
		zIndex: 1,
	},
	logo: {
		'--hanky-bg': color.orange,
		'--hanky-pattern': color.orange,
		height: '1.75em',
		position: 'absolute',
		top: 'calc(100% - 12px)',
		left: '2px',
		zIndex: 0,
	},
})

export default function PageHeader() {
	return (
		<header {...stylex.props(styles.header)}>
			<Link
				href='/'
				{...stylex.props(styles.link)}
			>
				<span {...stylex.props(styles.title)}>flagg.ing</span>
				<Logo {...stylex.props(styles.logo)} />
			</Link>
		</header>
	)
}
