import { type Config } from 'drizzle-kit'

import { env } from '~/env'

export default {
	schema: './src/server/db/schema.ts',
	driver: 'mysql2',
	dbCredentials: {
		uri: `mysql://${env.DATABASE_USERNAME}:${env.DATABASE_PASSWORD}@${env.DATABASE_HOST}/${env.DATABASE_NAME}?ssl={"rejectUnauthorized":true}`,
	},
	tablesFilter: ['flagging_*'],
} satisfies Config
