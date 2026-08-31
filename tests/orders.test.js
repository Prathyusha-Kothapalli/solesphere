const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');

describe('3. Coupon Validation & Checkout Order Placement Suite', () => {
  let customerToken;

  beforeAll(async () => {
    await seed();
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'demo@solesphere.com', password: 'Demo@123' });
    customerToken = loginRes.body.token;
  });

  test('POST /api/orders/coupon/validate - Should validate coupon SOLE20', async () => {
    const res = await request(app)
      .post('/api/orders/coupon/validate')
      .send({ code: 'SOLE20', subtotal: 200.0 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.discount).toEqual(40.0); // 20% of 200
  });

  test('POST /api/orders - Should place an order for direct item', async () => {
    const catalog = await request(app).get('/api/products?limit=1');
    const prod = catalog.body.data[0];

    const res = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${customerToken}`)
      .send({
        shipping_name: 'Test Customer',
        shipping_address: '123 Kicks Blvd',
        shipping_city: 'San Francisco',
        shipping_postal: '94102',
        payment_method: 'Credit Card',
        coupon_code: 'WELCOME10',
        direct_item: {
          product_id: prod.id,
          quantity: 1,
          size: '10',
          color: 'Standard'
        }
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.order.order_number).toBeDefined();
  });

  test('GET /api/orders - Should retrieve user order history', async () => {
    const res = await request(app)
      .get('/api/orders')
      .set('Authorization', `Bearer ${customerToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
