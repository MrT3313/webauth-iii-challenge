
exports.up = async function(knex) {
    return knex.schema.createTable('USERS', tbl => {
        tbl.increments('id')
        tbl.string('userName')
            .unique()
            .notNullable()
        tbl.string('password')
            .notNullable()
        tbl.string('department')
    })
}
exports.down = async function(knex) {
    return knex.schema.dropTableIfExists('USERS')
};
