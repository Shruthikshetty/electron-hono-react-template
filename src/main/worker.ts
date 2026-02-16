import createApp from './lib/create-app'
import base from './routes/index.route'
import profile from './routes/profile/profile.index'

// create hono app
const app = createApp()

// all routes go here
const routes = [base, profile]

routes.forEach((route) => {
  app.route('/', route)
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
