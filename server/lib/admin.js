/** Admin model */

const assert = require('assert')
const log4js = require('log4js')
const logger = log4js.getLogger('app')

const FileStorage = require('./file_storage')

class Admin {
    /**
     * 认证
     * @param {String} username 用户名
     * @param {String} password 密码
     */
    static async authenticate(username, password) {
        assert(username, 'username required')
        assert(password, 'password required')

        var db = new FileStorage('admin')
        const _admin = db.Sync.get('administrators')
            .find({ username })
            .value()

        logger.debug('find admin:', _admin)

        if (!_admin || _admin.password !== password)
            return false
        return true
    }
}

module.exports = Admin
