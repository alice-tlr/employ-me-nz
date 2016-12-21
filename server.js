var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')


var db = require('./db')
var routes = require('./routes')

var app = express()

module.exports = app


// Middleware

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(function (req, res, next) {
  db.getIndustries()
    .then(function (industries) {
      sortIndustries(industries)
      res.locals.industries = industries//every page needs access to this array
      next()
    })
})

// Routes

app.get('/', routes.getIndex)
app.get('/industry/:id', routes.getIndustry)

// Private Functions

//sort industries by description
function sortIndustries(industries) {
  industries.sort(function(a, b){
    var industryA = a.description.toUpperCase()
    var industryB = b.description.toUpperCase()
    if (industryA < industryB) {
      return -1
    }
    if (industryA > industryB) {
      return 1
    }
    return 0
  })
}
