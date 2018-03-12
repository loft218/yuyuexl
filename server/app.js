/**
 * Server by koa
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const log4js = require('log4js')
const logger = log4js.getLogger('app')
const morgan = require('koa-morgan')

const routers = require('./routers')

// koa app
const app = new Koa()
app.use(bodyParser())
app.use(morgan('tiny'))

//region middlewares
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
        if (401 === e.status) {
            ctx.status = 401
        }
        ctx.status = (ctx.status === 200) ? 500 : ctx.status
        ctx.body = {
            err_msg: e.message || 'server error'
        }
    }
})

app.use(routers.api_router.routes())
app.use(routers.admin_router.routes())

app.use(async (ctx) => {
    ctx.status = 404
    ctx.body = { err_msg: '404' }
})
//endregion

module.exports = app