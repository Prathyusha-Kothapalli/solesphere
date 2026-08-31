const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');
const jwt = require('jsonwebtoken');

describe('Promotional Coupon Management Suite', () => {
  let adminToken;
  let customerToken;
  let createdCouponId;

  beforeAll(async () => {
    await seed();
    adminToken = jwt.sign(
      { id: 1, email: 'admin@solesphere.com', role: 'admin' },
      process.env.JWT_SECRET || 'solesphere_super_secret_jwt_key_2026',
      { expiresIn: '1h' }
    );

    customerToken = jwt.sign(
      { id: 2, email: 'demo@solesphere.com', role: 'customer' },
      process.env.JWT_SECRET || 'solesphere_super_secret_jwt_key_2026',
      { expiresIn: '1h' }
    );
  });

  it('GET /api/coupons - admin lists all promotional coupons', async () => {
    const res = await request(app)
      .get('/api/coupons')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/coupons - admin creates a new 15% discount coupon', async () => {
    const res = await request(app)
      .post('/api/coupons')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        code: 'SUMMER15',
        discount_percent: 15,
        min_purchase: 100
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.code).toBe('SUMMER15');
    createdCouponId = res.body.data.id;
  });

  it('POST /api/coupons/validate - applies SUMMER15 coupon to $200 order', async () => {
    const res = await request(app)
      .post('/api/coupons/validate')
      .send({
        code: 'SUMMER15',
        cart_subtotal: 200
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.discount_amount).toBe(30);
    expect(res.body.data.final_subtotal).toBe(170);
  });

  it('POST /api/coupons/validate - fails if order is under minimum spend requirement', async () => {
    const res = await request(app)
      .post('/api/coupons/validate')
      .send({
        code: 'SUMMER15',
        cart_subtotal: 50
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('DELETE /api/coupons/:id - admin deletes coupon', async () => {
    const res = await request(app)
      .delete(`/api/coupons/${createdCouponId}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
