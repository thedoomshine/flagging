import * as stylex from '@stylexjs/stylex'

import { color, spacing, text, ui } from '../globalTokens.stylex'
import FooterLink from './footer-link'

const styles = stylex.create({
	footer: {
		display: 'grid',
		placeContent: 'end',
		backgroundColor: ui.black,
		fontSize: text.sm,
		gridColumn: 'content / right-gutter',
		padding: `${spacing.sm} 0`,
		gridRow: 'footer',
	},
})

export default function PageHeader() {
	return (
		<footer {...stylex.props(styles.footer)}>
			<FooterLink />
		</footer>
	)
}
