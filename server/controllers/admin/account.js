/** */

const Admin = require('../../lib/admin')

module.exports = {
    signIn: async (ctx) => {
        const username = ctx.body.username
        const password = ctx.body.password

        let passed = await Admin.authenticate(username, password)
        if (!passed) {
            ctx.status = 401
            throw new Error('Authentication failed')
        }
        ctx.body = {
            ok: 1
        }
    }
}