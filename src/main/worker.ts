import { Hono } from 'hono'
import { EXAMPLE_DATA } from '../common/constants/global.constants'

// create hono app
const app = new Hono()

// all hono routes
app.get('/profile', async (c) => {
  return c.json(EXAMPLE_DATA)
})

app.post('/user', async (c) => {
  const body = await c.req.json()
  return c.json(body)
})

// listen to message from main process this will be used to send request to hono app
process.parentPort.on('message', async (e) => {
  const port = e.ports[0]
  const { type, path, method, body } = e.data

  if (type === 'hono-request') {
    const res = await app.fetch(
      new Request(`http://localhost${path}`, {
        method,
        body: body ? JSON.stringify(body) : undefined
      })
    )
    const result = await res.json()
    port.postMessage(result)
    port.close()
  }
})
