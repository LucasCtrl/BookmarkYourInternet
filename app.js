const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const config = require('./config.json')

const app = express()

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./controllers'))

app.listen(config.port)
