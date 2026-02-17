import { migrate } from 'drizzle-orm/libsql/migrator'
import path from 'node:path'
import db from './index'

export async function runMigrations(): Promise<void> {
  const migrationsFolder = process.env.APP_RESOURCES_PATH
    ? path.join(process.env.APP_RESOURCES_PATH, 'migrations')
    : path.join(__dirname, '../../db/migrations')

  console.log(`Running migrations from ${migrationsFolder}`)

  try {
    await migrate(db, { migrationsFolder })
    console.log('Migrations completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}
