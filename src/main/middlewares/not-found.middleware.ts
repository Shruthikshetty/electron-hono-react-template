// middle ware to handle not found routes

import { NotFoundHandler } from 'hono'

const handleNotFound: NotFoundHandler = (c) => {
  return c.json({
    message: 'route not found',
    statusCode: 404
  })
}

export default handleNotFound
