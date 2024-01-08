import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'

import { color, spacing } from '../globalTokens.stylex'

const styles = stylex.create({
	header: {
		display: 'grid',
		backgroundColor: color.black,
		gridColumn: 'content / right-gutter',
		padding: `${spacing.sm} 0`,
		gridRow: 'header',
	}
})

export default function PageHeader() {
	return (
		<header {...stylex.props(styles.header)}>
			<Link href='/'>flagg.ing 🚩</Link>
		</header>
	)
}
