const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/link.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ links: [], count: 0 })
  .write()

// Get all entries
exports.get = () => (
  db.get('links')
    .value()
)

// Add a link
exports.post = (title, url) => (
  db.get('links')
    .push({ id: db.get('count') + 1, title: title, url: url })
    .write()
)

// Delete a link
exports.delete = (id) => (
  db.get('links')
    .remove({ id: id })
    .write()
)

// Increment count
exports.incrementCounter = () => (
  db.update('count', n => n + 1)
    .write()
)
