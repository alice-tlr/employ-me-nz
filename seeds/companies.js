
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('companies').insert({id: 1, industry_id: 22, name: '2 Degrees Mobile Ltd', address:'2 Degrees Mobile Ltd', website: 'www.2degreesmobile.co.nz'}),

        knex('companies').insert({id: 2, industry_id: 4, name:'Hollywood Bakery (Holdings) Limited' , address:'1G Henry Rose Place, Albany, Auckland' , website: 'none' }),

        knex('companies').insert({id: 3, industry_id: 2, name:'Holmes Consulting Group Limited Partnership', address:'PO Box 1266, Queenstown', website: 'www.holmesgroup.com' })

      ]);
    });
};
