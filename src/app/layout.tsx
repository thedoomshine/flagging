/* eslint-disable @next/next/no-page-custom-font */
import '../../public/fonts/fonts.css'
import './globals.css'

import * as stylex from '@stylexjs/stylex'

import PageFooter from './_components/page-footer'
import PageHeader from './_components/page-header'
import { color, font, spacing, text, width } from './globalTokens.stylex'

const styles = stylex.create({
	html: {
		colorScheme: 'dark',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	body: {
		backgroundColor: '#000',
		color: color.white,
		fontSize: text.md,
		fontFamily: font.sans,
		WebkitFontSmoothing: 'antialiased',
		WebkitTextSizeAdjust: '100%',
		MozOsxFontSmoothing: 'grayscale',
		MozTextSizeAdjust: '100%',
		height: '100dvh',
		width: '100vw',
		maxWidth: width.max,
		display: 'grid',
		gridTemplateColumns: `[left-gutter] minmax(${spacing.xs},1fr) [content] 7fr [right-gutter] minmax(${spacing.xs},1fr)`,
		gridTemplateRows:
			'[header] min-content 3em [body] auto [footer] min-content',
	},
	main: {
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
