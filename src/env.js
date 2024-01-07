import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		DATABASE_HOST: z.string(),
		DATABASE_USERNAME: z.string(),
		DATABASE_PASSWORD: z.string(),
		DATABASE_NAME: z.string(),
		DISCORD_CLIENT_ID: z.string(),
		DISCORD_CLIENT_SECRET: z.string(),
		NEXTAUTH_SECRET:
			process.env.NODE_ENV === 'production'
				? z.string()
				: z.string().optional(),
		NEXTAUTH_URL: z.preprocess(
			(str) => process.env.VERCEL_URL ?? str,
			process.env.VERCEL ? z.string() : z.string().url()
		),
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
	},
	client: {},
	runtimeEnv: {
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NODE_ENV: process.env.NODE_ENV
  },
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
})
