/**
 * server routes
 */

const route = require('koa-route')
const jwt = require('koa-jwt')

const controllers = require('./controllers')

const ping = async (ctx) => {
    ctx.body = 'pong'
}

module.exports = (app) => {
    app.use(route.get('/ping', ping))
    app.use(route.get('/api/welcome', controllers.home.welcome))

    app.use(route.post('/api/admin/sign-in', controllers.admin.account.signIn))

    app.use(jwt({ secret: 'yUyUExl' }))

    app.use(route.get('/api/admin/info', async (ctx) => {
        ctx.body = {
            ok: 1
        }
    }))
}