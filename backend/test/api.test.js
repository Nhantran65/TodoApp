const request = require('supertest');
const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/v1/tasks/list', () => {
  it('responds with a json array of tasks', (done) => {
    request(app)
      .get('/api/v1/tasks/list')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /api/v1/tasks/list', () => {
  it('responds with json containing an ID', (done) => {
    const tasks = [
      { _id: 0, title: 'Software Engineer', done: false },
      { _id: 1, title: 'Data Science', done: true },
      { _id: 2, title: 'Data Analysis', done: false }
    ];

    request(app)
      .post('/api/v1/tasks/list')
      .send({ tasks })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        if (!res.body.id) {
          throw new Error('Response should contain an ID');
        }
      })
      .end(done);
  });
});