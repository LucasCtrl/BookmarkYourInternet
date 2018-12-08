const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/link.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ links: [], count: 0 })
  .write()

// Get all entries
exports.getAll = () => (
  db.get('links')
    .value()
)

exports.get = (id) => (
  db.get('links')
    .find({ id: id })
    .value()
)

// Add a link
exports.post = (title, url, description) => (
  db.get('links')
    .push({ id: db.get('count') + 1, title: title, url: url, description: description })
    .write()
)

// Update a link
exports.update = (id, title, url, description) => (
  db.get('links')
    .find({ id: id })
    .assign({ title: title, url: url, description: description })
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
