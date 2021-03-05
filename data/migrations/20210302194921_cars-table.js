
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('ID');
      tbl.text('vin', 17).unique().notNullable();
      tbl.text('make').notNullable()
      tbl.text('model').notNullable()
      tbl.decimal('mileage').notNullable()
      tbl.text('title')
      tbl.text('tansmission')
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
