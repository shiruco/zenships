// tslint:disable-next-line:no-var-requires
const express = require('express')
// tslint:disable-next-line:no-var-requires
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req: any, res: any) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req: any, res: any) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err: any) => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})
