/* eslint-disable @typescript-eslint/no-misused-promises */
import * as stylex from '@stylexjs/stylex'

import { font, text } from '../globalTokens.stylex'

const styles = stylex.create({
	dropCap: {
		fontFamily: font.title,
		float: 'left',
		fontSize: text.h1,
		lineHeight: 0.8,
		paddingRight: '0.25em',
    textTransform: 'uppercase',
	},
})

export default function DropCap({ children }: { children: React.ReactNode }) {
	return <span {...stylex.props(styles.dropCap)}>{children}</span>
}
