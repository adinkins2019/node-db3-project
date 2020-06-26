const knex = require('knex')
const knexfile = require('../knexfile')
const db = knex(knexfile.development)
module.exports = {
    find(),
    findById(),
    findSteps(),
    add(),
    update(),
    remove()
}

function find(){
    return db()
}