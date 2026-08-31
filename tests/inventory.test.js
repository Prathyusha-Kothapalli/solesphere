const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');
const jwt = require('jsonwebtoken');

describe('Inventory Management & Low-Stock Alerts Suite', () => {
  let adminToken;
  let customerToken;

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

  it('GET /api/inventory/low-stock - admin can query low stock products', async () => {
    const res = await request(app)
      .get('/api/inventory/low-stock?threshold=100')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/inventory/low-stock - non-admin customer is forbidden (403)', async () => {
    const res = await request(app)
      .get('/api/inventory/low-stock')
      .set('Authorization', `Bearer ${customerToken}`);

    expect(res.statusCode).toBe(403);
    expect(res.body.success).toBe(false);
  });

  it('PUT /api/inventory/update-stock - admin updates stock level and logs audit record', async () => {
    const res = await request(app)
      .put('/api/inventory/update-stock')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        product_id: 1,
        change_amount: 25,
        reason: 'Shipment Received'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.change_amount).toBe(25);
  });

  it('GET /api/inventory/logs - admin retrieves stock audit logs', async () => {
    const res = await request(app)
      .get('/api/inventory/logs')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/inventory/replenish - bulk stock replenishment trigger', async () => {
    const res = await request(app)
      .post('/api/inventory/replenish')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        threshold: 10,
        add_quantity: 50
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.itemsReplenished).toBeDefined();
  });
});
