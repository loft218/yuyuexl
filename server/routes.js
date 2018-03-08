/**
 * server routes
 */

const route = require('koa-route')

const controllers = require('./controllers')

const ping = async (ctx) => {
    ctx.body = 'pong'
}

module.exports = (app) => {
    app.use(route.get('/ping', ping))
    app.use(route.get('/api/welcome', controllers.home.welcome))
}