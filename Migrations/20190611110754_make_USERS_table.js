
exports.up = async function(knex) {
    return knex.schema.createTable('USERS', table => {
        table
            .increments('id')
        table
            .string('name')
            .notNullable()
        table
            .string('password')
            .notNullable()
        table
            .string('department')
        table
            .timestamps(true, true)
    })
};

exports.down = async function(knex) {
    return knex.schema.dropTableIfExists('cohorts')
};
