/**
 * @file contains all the schemas related to profile
 */
import z from 'zod'

export const profileSchema = z.object({
  name: z.string(),
  age: z.number(),
  city: z.string()
})

// infer type
export type Profile = z.infer<typeof profileSchema>
