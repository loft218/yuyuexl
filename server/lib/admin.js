/** Admin model */

const assert = require('assert')
const jwt = require('jsonwebtoken')
const log4js = require('log4js')
const logger = log4js.getLogger('app')

const FileStorage = require('./file_storage')

const ADMIN_SECRET = process.env.ADMIN_SECRET

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

    /**
     * 生成JWT
     * @param {Any} data data
     * @param {Number|String} expiresIn  expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d"
     */
    static sign(data, expiresIn) {
        return jwt.sign({
            data
        }, ADMIN_SECRET, { expiresIn })
    }
}

module.exports = Admin
