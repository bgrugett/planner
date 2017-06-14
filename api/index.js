// API Router

// Required packages
const express = require('express');

// Required files - create seperate routers for different things - only one in this case
// could be many routers here for example a routerUser, routerBills etc
const routerTasks = require('./tasks');

// Router creation
const routerAPI = express.Router();

routerAPI.use('/tasks', routerTasks);

module.exports = routerAPI;
