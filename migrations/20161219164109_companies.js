
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', function (table) {
    table.increments('id').primary()
    table.string('industry_id').references('industries.id')
    table.string('name')
    table.string('address')
    table.string('website')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies')
};
