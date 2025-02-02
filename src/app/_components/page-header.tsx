import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'

import Logo from '../_components/hanky'
import { COLOR, font, spacing, ui } from '../globalTokens.stylex'

const styles = stylex.create({
	header: {
		display: 'grid',
		backgroundColor: ui.black,
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
		backgroundColor: ui.black,
		lineHeight: 0.9,
		position: 'relative',
		zIndex: 1,
	},
	logo: {
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
				<Logo pattern="none" fill={COLOR.orange} {...stylex.props(styles.logo)} />
			</Link>
		</header>
	)
}
