import { DrizzleAdapter } from '@auth/drizzle-adapter'
import {
	getServerSession,
	type DefaultSession,
	type Session,
	type NextAuthOptions,
} from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

import { env } from '~/env'
import { db } from '~/server/db'
import { mysqlTable } from '~/server/db/schema'

type User = {
	id: string
} & DefaultSession['user']

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string
		} & DefaultSession['user']
	}
}

export const authOptions = {
	adapter: DrizzleAdapter(db, mysqlTable),
	callbacks: {
		session: async ({
			session,
			user,
		}: {
			session: Session
			user: User
		}) => ({
			...session,
			user: {
				...user,
				id: user.id,
			},
		}),
	},
	providers: [
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
		}),
	],
} satisfies NextAuthOptions

export const getServerAuthSession = () => getServerSession(authOptions as NextAuthOptions)
