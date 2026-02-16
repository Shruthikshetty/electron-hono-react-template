/**
 * @file contains all the routes related to profile with Zod Open Api support
 */

import { createRoute } from '@hono/zod-openapi'
import { profileSchema } from '../../../common/schemas/profile'

// route to get profile data
export const getProfile = createRoute({
  tags: ['profile'],
  method: 'get',
  path: '/profile',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: profileSchema
        }
      },
      description: 'success response for profile route'
    }
  }
})

// export all the route types
export type GetProfileRoute = typeof getProfile
