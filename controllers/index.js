const router = require('express').Router()
const Link = require('../models/link')
const Customization = require('../models/customization')

router.use('/manage', require('./manage'))
router.use('/customization', require('./customization'))

router.get('/', function (req, res) {
  res.render('index', { customStylesheet: Customization.getAll(), links: Link.getAll() })
})

module.exports = router
