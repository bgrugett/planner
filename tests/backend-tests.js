const db = require('../db/_db');
const Task = require('../db/task');
const app = require('../app');

const chai = require('chai');
const chaiProperties = require('chai-properties');
const chaiThings = require('chai-things');
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const supertest = require('supertest');

describe(' Backend tests ', () => {

    beforeEach('Synchronize and clear database', () => db.sync({force: true}));

    after('Synchronize and clear database', () => db.sync({force: true}));

    describe('Sequelize models', function () {
        describe('Task Model', () => {
          it('has name in the schema definition', () => {
                expect(Task.attributes.name).to.be.an('object');
            });
          it('has month in the schema definition', () => {
                expect(Task.attributes.month).to.be.an('object');
            });
          it('has day in the schema definition', () => {
                expect(Task.attributes.day).to.be.an('object');
            });
          it('has year in the schema definition', () => {
                expect(Task.attributes.year).to.be.an('object');
            });
        });
    });

    describe('HTTP Server', () => {

        let agent;
        beforeEach('Set up agent for testing', () => {
            agent = supertest(app);
        });

        describe('api routes', () => {

            let mow;
            let clean;
            beforeEach('Seed tasks', () => {
                const tasks = [
                    {name: 'mow'},
                    {name: 'clean'}
                ];
                return Task.bulkCreate(tasks, {returning: true})
                    .then(createdTasks => {
                        mow = createdTasks[0].id;
                        clean = createdTasks[1].id;
                    });
            });


            describe('task', () => {

                it('serves up all tasks on request to GET /', () => {
                    return agent
                        .get('/api/tasks')
                        .expect(200)
                        .then(res => {
                          console.log('res.body ', res.body);
                            expect(res.body).to.be.an('array');
                            expect(res.body.length).to.be.equal(2);
                        });
                });
            });

        });

    });

});
