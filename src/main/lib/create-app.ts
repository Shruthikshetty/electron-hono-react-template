import { OpenAPIHono } from '@hono/zod-openapi'

import { AppBindings } from '../types'
import handleNotFound from '../middlewares/not-found.middleware'
import { appLogger } from '../middlewares/app-logger'

/**
 * This will create the router for the app with Zod Open Api support
 */
export const createRouter = () => {
  const router = new OpenAPIHono<AppBindings>({
    strict: false
  })

  return router
}

// a function that creates the app with all the middlewares
const createApp = () => {
  const app = createRouter()

  // middlewares go here
  app.notFound(handleNotFound)
  app.use(appLogger)

  return app
}

export default createApp
