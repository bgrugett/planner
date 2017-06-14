This is a simple Home Maintenance Task Planner

It uses the following technologies:

Express - this is the app server

Sequelize - provides the database schema (ORM)

Sqlite - a simple database stored in a local file

React - a Javascript library that manages the DOM

To install:
>git clone https://github.com/bgrugett/planner.git

>run npm install -- to install the required packages listed in the package.json file

>npm start -- runs webpack and starts the server

open localhost:9000 in your browser (to change the port to 'nnnn': type "export PORT=nnnn" on the command line before npm start)

add some tasks
see the tasks displayed in an ordered list

to run a simple backend test of the database schema and a get request:

>npm run test
