const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const fileUpload = require('express-fileupload')

const config = require('./config.json')

const app = express()

// Set templating engine
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static('public/'))
app.use('/db/css/', express.static('db/css/'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

app.use(require('./controllers'))

app.listen(config.port)
