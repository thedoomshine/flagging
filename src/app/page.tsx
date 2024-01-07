// import Link from 'next/link'

// import { getServerAuthSession } from '~/server/auth'
// import { api } from '~/trpc/server'
import * as stylex from '@stylexjs/stylex'
import PageHeader from './_components/page-header'
import { spacing } from './globalTokens.stylex'

const styles = stylex.create({
	main: {
    padding: spacing.xxs,
	}
})

export default async function Home() {
	// const hello = await api.post.hello.query({ text: 'from tRPC' })
	// const session = await getServerAuthSession()

	return (
		<>
			<PageHeader/>
			<main {...stylex.props(styles.main)}>
				some gay shit idk
			</main>
		</>
	)
}
