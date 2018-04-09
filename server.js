const jsonServer = require('json-server')
const server = jsonServer.create()

const db = require('./db.js')()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const routes = require('./routes.json');

// put this first
server.use(jsonServer.rewriter(routes))
server.use(middlewares)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})