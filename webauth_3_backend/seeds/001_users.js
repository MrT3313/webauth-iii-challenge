
exports.seed = function(knex, Promise) {
  return knex('USERS').insert([
    {
       userName: 'Reed',
       password: 'PlainText1',
       department: 'Boss'
    }
  ]);
};
