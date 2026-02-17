// data base connection
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema.js'
// @ts-expect-error - file extension is .ts but tsconfig is NodeNext
import env from '../../../env.ts'

export const client = createClient({
  url: env.DATABASE_URL
})
// define the data base with schemas
const db = drizzle(client, {
  schema
})

export default db
