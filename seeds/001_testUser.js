
exports.seed = function(knex, Promise) {
  return knex('USERS')
  .truncate()
    .then(function() {
      return knex('USERS').insert([
        {name: 'TestUser', password: 'testPassword', department: 'econ' }
      ])
    })
};
