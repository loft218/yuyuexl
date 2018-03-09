/**
 * Server by koa
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const log4js = require('log4js')
const logger = log4js.getLogger('app')
const morgan = require('koa-morgan')
//koa app
const app = new Koa()
app.use(bodyParser())
app.use(morgan('tiny'))

app.use(async (ctx, next) => {
    try {
        ctx.body = ctx.request.body
        await next()
        if (typeof ctx.body === 'string') {
            ctx.body = {
                err_msg: ctx.body
            }
        }
    } catch (e) {
        logger.error(e.stack || e)
        ctx.status = (ctx.status === 200) ? 500 : ctx.status
        ctx.body = {
            status: e.status,
            err_msg: e.message || 'server error'
        }
    }
})

// app.use(async (ctx, next) => {
//     return next().catch((err) => {
//         if (401 === err.status) {
//             ctx.status = 401
//             ctx.body = 'Protected resource, use Authorization header to get access\n'
//         } else {
//             throw err
//         }
//     })
// })

require('./routes')(app)

app.use(async (ctx) => {
    ctx.status = 404
    ctx.body = { err_msg: '404' }
})

module.exports = app