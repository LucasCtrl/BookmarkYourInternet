const router = require('express').Router()
const del = require('del')
const Customization = require('../models/customization')

router.get('/', function (req, res) {
  res.render('customization', { customStylesheet: Customization.getAll() })
})

router.post('/add', function (req, res) {
  // If no file provided
  if (Object.keys(req.files).length === 0) return res.status(400).send('No files were uploaded.')

  var cssFile = req.files.cssFile
  cssFile.mv('db/css/' + cssFile.name, function (err) {
    if (err) return res.status(500).send(err)
  })
  Customization.post(cssFile.name)
  res.redirect('/customization')
})

router.get('/delete', function (req, res) {
  var name = req.query.name
  del([ 'db/css/' + name ])
  Customization.delete(name)
  res.redirect('/customization')
})

module.exports = router
