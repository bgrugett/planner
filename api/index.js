// API Router

// Required packages
const express = require('express');

// Required files - create seperate routers for different things - only one in this case
const routerTasks = require('./tasks');

// Router creation
const routerAPI = express.Router();

routerAPI.use('/tasks', routerTasks);
console.log('in api index.js ');
module.exports = routerAPI;
