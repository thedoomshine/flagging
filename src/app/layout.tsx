import 'the-new-css-reset/css/reset.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import { TRPCReactProvider } from '~/trpc/react'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata = {
	title: 'flagg.ing',
	description: 'homosocialization for terminally online perverts',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<TRPCReactProvider cookies={cookies().toString()}>
					{children}
				</TRPCReactProvider>
			</body>
		</html>
	)
}
