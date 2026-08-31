const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');

describe('4. Cart & Wishlist Operations Suite', () => {
  let token;

  beforeAll(async () => {
    await seed();
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'demo@solesphere.com', password: 'Demo@123' });
    token = loginRes.body.token;
  });

  test('GET /api/user/cart - Should fetch pre-populated cart items', async () => {
    const res = await request(app)
      .get('/api/user/cart')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('POST /api/user/cart - Should add item to cart', async () => {
    const catalog = await request(app).get('/api/products?limit=1');
    const prod = catalog.body.data[0];

    const res = await request(app)
      .post('/api/user/cart')
      .set('Authorization', `Bearer ${token}`)
      .send({
        product_id: prod.id,
        size: '11',
        color: 'Black/White',
        quantity: 1
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });

  test('POST /api/user/wishlist/toggle - Should toggle wishlist state', async () => {
    const catalog = await request(app).get('/api/products?limit=1');
    const prod = catalog.body.data[0];

    const res1 = await request(app)
      .post('/api/user/wishlist/toggle')
      .set('Authorization', `Bearer ${token}`)
      .send({ product_id: prod.id });

    expect(res1.statusCode).toEqual(200);
    expect(res1.body.success).toBe(true);
  });
});
