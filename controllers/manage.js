const router = require('express').Router()
const Link = require('../models/link')
const Customization = require('../models/customization')

router.get('/', function (req, res) {
  res.render('manage', { customStylesheet: Customization.getAll() })
})

router.post('/add', function (req, res) {
  var title = req.body.title
  var url = req.body.url
  var description = req.body.description ? req.body.description : ''
  Link.post(title, url, description)
  Link.incrementCounter()
  res.redirect('/')
})

router.get('/edit', function (req, res) {
  var id = Number(req.query.id)
  res.render('edit', { customStylesheet: Customization.getAll(), data: Link.get(id) })
})

router.post('/update', function (req, res) {
  var id = Number(req.query.id)
  var title = req.body.title
  var url = req.body.url
  var description = req.body.description ? req.body.description : ''
  Link.update(id, title, url, description)
  res.redirect('/')
})

router.get('/delete', function (req, res) {
  var id = Number(req.query.id)
  Link.delete(id)
  res.redirect('/')
})

module.exports = router
