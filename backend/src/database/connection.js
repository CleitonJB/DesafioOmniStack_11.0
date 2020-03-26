const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //configurando a xonexão e definindo que ela será a de desenvolvimento

module.exports = connection;