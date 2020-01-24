
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, name: 'Pizza Dough'},
        {id: 2, name: 'Pizza Sauce'},
        {id: 3, name: 'Super Pizza'}
      ]);
    });
};