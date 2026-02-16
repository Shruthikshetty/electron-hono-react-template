/**
 * @file contains all the routes related to profile with Zod Open Api support
 */

import { createRoute, z } from '@hono/zod-openapi'
import { profileSchema } from '../../../common/schemas/profile'
import * as HTTP_STATUS_CODES from '../../constants/http-status-codes.constants'

// route to get profile data
export const getProfile = createRoute({
  tags: ['profile'],
  method: 'get',
  path: '/profile',
  responses: {
    [HTTP_STATUS_CODES.OK]: {
      content: {
        'application/json': {
          schema: z.object({
            data: profileSchema
          })
        }
      },
      description: 'success response for profile route'
    }
  }
})

// export all the route types
export type GetProfileRoute = typeof getProfile
