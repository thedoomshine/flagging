import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		DATABASE_HOST: z.string(),
		DATABASE_USERNAME: z.string(),
		DATABASE_PASSWORD: z.string(),
		DATABASE_NAME: z.string(),
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
		NEXTAUTH_SECRET:
			process.env.NODE_ENV === 'production'
				? z.string()
				: z.string().optional(),
		NEXTAUTH_URL: z.preprocess(
			(str) => process.env.VERCEL_URL ?? str,
			process.env.VERCEL ? z.string() : z.string().url()
		),
		DISCORD_CLIENT_ID: z.string(),
		DISCORD_CLIENT_SECRET: z.string(),
	},
	client: {},
	runtimeEnv: {
		DATABASE_NAME: process.env.DATABASE_NAME,
		DATABASE_HOST: process.env.DATABASE_HOST,
		DATABASE_USERNAME: process.env.DATABASE_USERNAME,
		DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
		NODE_ENV: process.env.NODE_ENV,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
		DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
})
