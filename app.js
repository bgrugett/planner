// Main application

// Required libraries
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

// Required files
const db = require('./db/_db');
const routerAPI = require('./api');

// App creation
const app = express();
const PORT = 9000;

// Middleware

//   Logging
app.use(volleyball);

//   Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static file serving
app.use(express.static('dist'));

// Routers - back end routes begin with /api
app.use('/api', routerAPI);

// anticipate using react router on front end later on
const validFrontendRoutes = ['/'];
const indexPath = path.join(__dirname, '/dist', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

// Error logging middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`We're listening on port ${PORT}`);
  console.log('Connecting to the database...');
  db.sync({ force: false })
    .then(() => {
      console.log('Connected.');
    });
});
