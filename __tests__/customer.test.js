'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('creates a customer', async () => {
    let response = await request.post('/customer').send({
      name: 'Tester',
      age: 20,
      pronouns: 'he/him',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(20);
    expect(response.body.pronouns).toEqual('he/him');
    expect(response.body.id).toBeTruthy();
  });

  it('gets customers', async () => {
    let response = await request.get('/customer');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].age).toEqual(20);
    expect(response.body[0].pronouns).toEqual('he/him');
    expect(response.body[0].id).toBeTruthy();
  });
});

it('gets a single customer by id', async () => {
  let response = await request.get('/customer/1');

  expect(response.status).toEqual(200);
  expect(response.body.name).toEqual('Tester');
  expect(response.body.age).toEqual(20);
  expect(response.body.pronouns).toEqual('he/him');
  expect(response.body.id).toBeTruthy();
});

it('updates as expected', async () => {
  let response = await request.put('/customer/1').send({
    name: 'steve',
    age: 24,
    pronouns: 'he/him',
  });
  expect(response.status).toEqual(200);
  expect(response.body.name).toEqual('steve');
  expect(response.body.age).toEqual(24);
  expect(response.body.pronouns).toEqual('he/him');
  expect(response.body.id).toBeTruthy();
});

it('deletes properly', async () => {
  let response = await request.delete('/customer/1');
  console.log('delete response', response.body);
  expect(response.status).toEqual(200);
});