var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  getCharacteristics: getCharacteristics,
  getWomble: getWomble
}

function getHome (req, res) {
  knex('wombles')
  .select()
  .then(function (wombles){
    var vm = {
      wombles: wombles
    }
    res.render('home', vm)
  })
}

function getCharacteristics (req, res) {
  knex('wombles')
  .join('characteristics', 'characteristics.id', '=', 'wombles.characteristic_id')
  .select('characteristics.description', 'wombles.name')
  .then(function (wombles){
    var char = {
      wombles:wombles,
    }
    res.render('characteristics', char)
    })
  }

  function getWomble (req, res) {
    var id = Number(req.params.id)
    knex('wombles')
    .join('characteristics', 'characteristics.id', '=', 'wombles.characteristic_id')
    .select('wombles.name', 'characteristics.description')
    .where('wombles.id', id)
    .first()
    .then(function(womble){
      res.render('singlewomble', womble)
    })

  }
