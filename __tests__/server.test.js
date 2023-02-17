const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
  test('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Hello World!');
  });

  test('handles invalid request route', async () => {
    const response = await mockRequest.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('handles invalid request method', async () => {
    const response = await mockRequest.post('/customer/hello');

    expect(response.status).toEqual(404);
  });
});
