// Tasks Routes

// Required libraries
const routerTasks = require('express').Router();

// Required files
const Task = require('../db/task');

// Routes

routerTasks.post('/', (req, res, next) => {
  console.log('tasks post req.body ', req.body);
  Task.create(req.body)
    .then((createdTasks) => {
      res.status(200).send(createdTasks);
    })
    .catch(next);
});

routerTasks.get('/', (req, res, next) => {
  Task.findAll({})
    .then((foundTasks) => {
      res.status(200).send(foundTasks);
    })
    .catch(next);
});

routerTasks.delete('/delete/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then( (deletedTask) => res.send(deletedTask))
  .catch(next);
});

module.exports = routerTasks;
