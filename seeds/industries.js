
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('industries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('industries').insert({id: 1, description: 'Healthcare'}),
        knex('industries').insert({id: 2, description: 'Engineering And Science'}),
        knex('industries').insert({id: 3, description: 'Information Technology'}),
        knex('industries').insert({id: 4, description: 'Manufacturing'}),
        knex('industries').insert({id: 5, description: 'Bcs Group Limited'}),
        knex('industries').insert({id: 6, description: 'Government (Central)'}),
        knex('industries').insert({id: 7, description: 'Other'}),
        knex('industries').insert({id: 8, description: 'Retail'}),
        knex('industries').insert({id: 9, description: 'Water, Gas, Electricity'}),
        knex('industries').insert({id: 10, description: 'High Performance Sport Nz'}),
        knex('industries').insert({id: 11, description: 'Agriculture, Forestry And Fishing'}),
        knex('industries').insert({id: 12, description: 'Construction - Building'}),
        knex('industries').insert({id: 13, description: 'Human Resources'}),
        knex('industries').insert({id: 14, description: 'Accounting/finance'}),
        knex('industries').insert({id: 15, description: 'Sports'}),
        knex('industries').insert({id: 16, description: 'Recruitment'}),
        knex('industries').insert({id: 17, description: 'Education And Training'}),
        knex('industries').insert({id: 18, description: 'Restaurant/catering'}),
        knex('industries').insert({id: 19, description: 'Legal'}),
        knex('industries').insert({id: 20, description: 'Administration And Customer Service'}),
        knex('industries').insert({id: 21, description: 'Arts/cultural/entertainers'}),
        knex('industries').insert({id: 22, description: 'Telecommunications'})
      ]);
    });
};
