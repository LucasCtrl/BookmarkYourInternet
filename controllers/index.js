const router = require('express').Router()
const Link = require('../models/link')

router.get('/', function (req, res) {
  res.render('index', { links: Link.get() })
})

router.post('/add', function (req, res) {
  var title = req.body.title
  var url = req.body.url
  Link.post(title, url)
  Link.incrementCounter()
  res.redirect('/')
})

router.post('/delete', function (req, res) {
  var id = Number(req.body.id)
  Link.delete(id)
  res.redirect('/')
})

module.exports = router
