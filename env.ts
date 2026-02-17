// this file provides env in a type safe way

import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'

//set up env's
expand(config())

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.url('').default('file:dev.db')
})

type ENV = z.infer<typeof EnvSchema>

let tempEnv: ENV

try {
  tempEnv = EnvSchema.parse(process.env)
} catch (err) {
  const error = err as z.ZodError
  console.error('Invalid environment variables: ', z.flattenError(error))
  //exist the app in case of error
  process.exit(1)
}

const env = tempEnv
//export type save env
export default env
