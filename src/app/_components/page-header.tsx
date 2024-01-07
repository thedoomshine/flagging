import * as stylex from '@stylexjs/stylex'

import { color, spacing } from '../globalTokens.stylex'

const styles = stylex.create({
	header: {
		backgroundColor: color.black,
    padding: spacing.xxs,
		width: '100vw',
	},
})

export default function PageHeader() {
	return <header {...stylex.props(styles.header)}>flagg.ing 🚩</header>
}
