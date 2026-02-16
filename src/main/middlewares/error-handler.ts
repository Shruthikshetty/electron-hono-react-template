/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Hook } from '@hono/zod-openapi'
import { flattenError } from 'zod'

// handles the api zod validation errors this will be used as the default hook for zod open api
const errorHandler: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: flattenError(result.error)
      },
      404
    )
  }

  // if no error return null
  return null
}

export default errorHandler
