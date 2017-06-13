// Task Model

// Required libraries
const Sequelize = require('sequelize');

// Required files
const db = require('./_db');

const Task = db.define('task', {
  name: Sequelize.STRING,
  month: Sequelize.INTEGER,
  day: Sequelize.INTEGER
});

module.exports = Task;
