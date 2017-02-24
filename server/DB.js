const Sequelize = require('sequelize');

//MAKE SURE TO MAKE THE PASSWORD & USERNAME PRIVATE
const dbname = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PW


const sequelize = new Sequelize(dbname, username, password, {
  host: 'civicsportal.c9qldifjptpv.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize
