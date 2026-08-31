const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/database');
const seed = require('../src/db/seed');

describe('1. Authentication & Security API Suite', () => {
  beforeAll(async () => {
    await seed();
  });

  test('POST /api/auth/register - Should register a new customer account', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test Runner User',
        email: 'testrunner@solesphere.com',
        password: 'Password123!',
        phone: '+1 555-0199',
        address: '100 Test St',
        city: 'Miami',
        postal_code: '33101'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe('testrunner@solesphere.com');
  });

  test('POST /api/auth/register - Should fail on duplicate email', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Duplicate',
        email: 'demo@solesphere.com',
        password: 'Password123!'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });

  test('POST /api/auth/login - Should log in demo customer', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'demo@solesphere.com',
        password: 'Demo@123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.role).toBe('customer');
  });

  test('POST /api/auth/login - Should fail with wrong password', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'demo@solesphere.com',
        password: 'WrongPassword'
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body.success).toBe(false);
  });

  test('GET /api/auth/me - Should return current user profile with valid JWT', async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'demo@solesphere.com', password: 'Demo@123' });

    const token = loginRes.body.token;

    const meRes = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(meRes.statusCode).toEqual(200);
    expect(meRes.body.user.email).toBe('demo@solesphere.com');
  });
});
