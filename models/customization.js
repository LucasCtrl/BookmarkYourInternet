const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/customization.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ stylesheets: [] })
  .write()

// Get all entries
exports.getAll = () => (
  db.get('stylesheets')
    .value()
)

// Add a stylesheet
exports.post = (name) => (
  db.get('stylesheets')
    .push('/db/css/' + name)
    .write()
)

// Delete a stylesheet
exports.delete = (name) => (
  db.get('stylesheets')
    .pull('/db/css/' + name)
    .write()
)
