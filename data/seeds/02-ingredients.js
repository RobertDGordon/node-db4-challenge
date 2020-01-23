
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'Flour', qty: '1', recipe_id: 1},
        {id: 2, name: 'Salt', qty: '1', recipe_id: 1},
        {id: 3, name: 'Sugar', qty: '1', recipe_id: 1},
        {id: 4, name: 'Tomatoes', qty: '3', recipe_id: 2},
        {id: 5, name: 'Mozzarella', qty: '2', recipe_id: 3},
        {id: 6, name: 'Pepperoni', qty: '10', recipe_id: 3},
      ]);
    });
};

