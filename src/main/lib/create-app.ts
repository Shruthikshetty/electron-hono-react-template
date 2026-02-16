import { OpenAPIHono } from '@hono/zod-openapi'

/**
 * This will create the router for the app with Zod Open Api support
 */
export const createRouter = () => {
  const router = new OpenAPIHono({
    strict: false
  })

  return router
}

// a function that creates the app with all the middlewares
const createApp = () => {
  const app = createRouter()

  // middlewares go here

  // handle not found
  app.notFound((c) => {
    return c.json({
      message: 'route not found',
      statusCode: 404
    })
  })

  return app
}

export default createApp
