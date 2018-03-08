/**
 * Home
 */

module.exports = {
    welcome: async (ctx) => {
        ctx.body = {
            welcome: 'Welcome!'
        }
    }
}