const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const FileAsync = require('lowdb/adapters/FileAsync')

// const adapter = new FileSync('./data/db.json')
// const db = low(adapter)

class FileStorage {
    constructor(filename) {
        this.filename = filename
    }

    get Sync() {
        const adapter = new FileSync(`./data/${this.filename}.json`)
        return low(adapter)
    }

    get Async() {
        const adapter = new FileAsync(`./data/${this.filename}.json`)
        return low(adapter)
    }
}

module.exports = FileStorage