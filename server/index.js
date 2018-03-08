/**
 * yuyuexl server
 */

const config = require('config')

//log configure
const log4js = require('log4js')
log4js.configure(config.get('log4js'))
const logger = log4js.getLogger('startup')

//startup
const app = require('./app')
app.listen(config.get("port") || 0, () => {
    logger.info(`[${process.env.NODE_ENV || 'development'}] ${config.name} listened on ${config.get("port") || 0}`)
})