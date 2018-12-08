const router = require('express').Router()
const Link = require('../models/link')

router.use('/manage', require('./manage'))

router.get('/', function (req, res) {
  res.render('index', { links: Link.getAll() })
})

module.exports = router
