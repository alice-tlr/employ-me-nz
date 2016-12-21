var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)

function getIndustries () {
  return knex('industries')
}

function getCompanies () {
  return knex('companies')
}
//this returns the industry specified by the id
function getIndustry (id) {
  return knex('industries')
    .where('id', id)
    .first()//this will return just the industry we are looking for
}
module.exports = {
  getIndustries: getIndustries,
  getCompanies: getCompanies,
  getIndustry: getIndustry
}
