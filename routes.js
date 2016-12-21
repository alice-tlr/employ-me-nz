var db = require('./db')

module.exports = {
  getIndex: getIndex,
  getIndustry: getIndustry
}


function getIndex (req, res) {
  var search = req.query.search || ''
  db.getCompanies()
    .where('name', 'like', '%' + search + '%')
    .orWhere('address', 'like', '%' + search + '%')
    .then(function (companies) {
      var data = {
        companies: companies
      }
      res.render('home', data)
    })
}
//this function is getting data from db about a particular industry and displays it
function getIndustry (req, res) {
  db.getIndustry(req.params.id)//asked the db for that particular industry with that id
    .then(function (industry) {
      return db.getCompanies()
        .where('industry_id', industry.id)
        .then(function (companies) {
          industry.companies = companies
          return industry
        })
    })
    .then(function (industry) {
      res.render('industry', industry)//this just displays the industry
    })
}
