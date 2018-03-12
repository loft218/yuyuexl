/**
 * server routes
 */

const Router = require('koa-router')
const jwt = require('koa-jwt')

const controllers = require('./controllers')

//region api router
const apiRouter = new Router(
    { prefix: '/api' }
)

apiRouter.get('/welcome', controllers.home.welcome)
//endregion

//region admin router
const adminRouter = new Router({
    prefix: '/admin'
})
adminRouter.post('/sign-in', controllers.admin.account.signIn)

/**
 * APIs blow need jwt auth
 * Http Headers
 * Authorization: 'Bearer eyJhbG...0EHxVYFI1K191g',
 */
const ADMIN_SECRET = process.env.ADMIN_SECRET
adminRouter.use(jwt({ secret: ADMIN_SECRET }))
adminRouter.get('/info', async (ctx) => {
    // console.log(ctx.state)
    // { user: { data: { username: 'aaaa' }, iat: 1520838549, exp: 1520842149 } }
    ctx.body = {
        ok: 1
    }
})
//endregion

module.exports = {
    api_router: apiRouter,
    admin_router: adminRouter
}