import './globals.css'

import { cookies } from 'next/headers'
import * as stylex from '@stylexjs/stylex'

import { TRPCReactProvider } from '~/trpc/react'
import { color, font, text } from './globalTokens.stylex'

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
	},
})

export const metadata = {
	title: 'flagg.ing 🚩',
	description: 'homosocialization for terminally online perverts',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
				<TRPCReactProvider cookies={cookies().toString()}>
					{children}
				</TRPCReactProvider>
			</body>
		</html>
	)
}
