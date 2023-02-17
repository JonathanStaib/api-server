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
  it('creates a new city!', async () => {
    let response = await request.post('/city').send({
      name: 'Tester',
      country: 'Canada',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.country).toEqual('Canada');
    expect(response.body.id).toBeTruthy();
  });

  it('gets all cities', async () => {
    let response = await request.get('/city');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].country).toEqual('Canada');
    expect(response.body[0].id).toBeTruthy();
  });
});

it('gets a single city by id', async () => {
  let response = await request.get('/city/1');

  expect(response.status).toEqual(200);
  expect(response.body.name).toEqual('Tester');
  expect(response.body.country).toEqual('Canada');
  expect(response.body.id).toBeTruthy();
});

it('updates the city as expected', async () => {
  let response = await request.put('/city/1').send({
    name: 'Dubai',
    country: 'idk',
  });
  expect(response.status).toEqual(200);
  expect(response.body.name).toEqual('Dubai');
  expect(response.body.country).toEqual('idk');
  expect(response.body.id).toBeTruthy();
});

it('deletes properly', async () => {
  let response = await request.delete('/city/1');
  console.log('delete response', response.body);
  expect(response.status).toEqual(200);
});