// Database index

// Required libraries
const Sequelize = require('sequelize');

const db = new Sequelize('planner', 'bcg', null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = db;
