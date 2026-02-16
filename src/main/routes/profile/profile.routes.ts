/**
 * @file contains all the routes related to profile with Zod Open Api support
 */

import { createRoute, z } from '@hono/zod-openapi'

export const getProfile = createRoute({
  tags: ['profile'],
  method: 'get',
  path: '/api/profile',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            name: z.string(),
            age: z.number(),
            city: z.string()
          })
        }
      },
      description: 'success response for profile route'
    }
  }
})
