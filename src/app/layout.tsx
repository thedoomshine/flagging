import './globals.css'

import * as stylex from '@stylexjs/stylex'

import PageFooter from './_components/page-footer'
import PageHeader from './_components/page-header'
import { color, font, spacing, text } from './globalTokens.stylex'

const styles = stylex.create({
	html: {
		colorScheme: 'dark',
	},
	body: {
		backgroundColor: color.black,
		color: color.white,
		fontSize: text.md,
		fontFamily: font.sans,
		height: '100dvh',
		width: '100vw',
		display: 'grid',
		gridTemplateColumns: `[left-gutter] minmax(${spacing.xs},1fr) [content] 7fr [right-gutter] minmax(${spacing.xs},1fr)`,
		gridTemplateRows: '[header] min-content [body] auto [footer] min-content',
	},
	main: {
		display: 'grid',
		gridColumn: 'content',
		gridRow: 'body',
	},
})

export const metadata = {
	title: 'flagg.ing 🚩',
	description: 'homosocialization for terminally online perverts',
	icons: [{ rel: 'icon', url: '/icon' }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			{...stylex.props(styles.html)}
			lang='en'
		>
			<body {...stylex.props(styles.body)}>
				<PageHeader />
				<main {...stylex.props(styles.main)}>{children}</main>
				<PageFooter />
			</body>
		</html>
	)
}
