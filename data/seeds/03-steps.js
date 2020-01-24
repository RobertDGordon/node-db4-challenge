
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Add flour', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Add salt', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Add sugar', recipe_id: 1},
        {id: 4, step_number: 1, instructions: 'Cook tomatoes', recipe_id: 2},
        {id: 5, step_number: 1, instructions: 'Spread cheese', recipe_id: 3},
        {id: 6, step_number: 2, instructions: 'Spread pepperoni', recipe_id: 3},
      ]);
    });
};