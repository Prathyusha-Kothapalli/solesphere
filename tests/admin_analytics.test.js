const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');

describe('5. Admin Management & Analytics Telemetry Suite', () => {
  let adminToken;
  let customerToken;

  beforeAll(async () => {
    await seed();
    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@solesphere.com', password: 'Demo@123' });
    adminToken = adminLogin.body.token;

    const custLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'demo@solesphere.com', password: 'Demo@123' });
    customerToken = custLogin.body.token;
  });

  test('GET /api/admin/dashboard - Should deny access to non-admin customers (403)', async () => {
    const res = await request(app)
      .get('/api/admin/dashboard')
      .set('Authorization', `Bearer ${customerToken}`);

    expect(res.statusCode).toEqual(403);
    expect(res.body.success).toBe(false);
  });

  test('GET /api/admin/dashboard - Should return admin telemetry stats to admin user', async () => {
    const res = await request(app)
      .get('/api/admin/dashboard')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.stats.totalProducts).toBeGreaterThanOrEqual(100);
    expect(res.body.stats.totalOrders).toBe(20);
  });

  test('POST /api/admin/products - Should allow admin to create a new product', async () => {
    const brands = await request(app).get('/api/meta/brands');
    const categories = await request(app).get('/api/meta/categories');

    const res = await request(app)
      .post('/api/admin/products')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'SoleSphere Custom Protro PE',
        brand_id: brands.body.data[0].id,
        category_id: categories.body.data[0].id,
        price: 320,
        original_price: 380,
        description: 'Special administrative custom PE runner.',
        sizes_available: ["8", "9", "10", "11"],
        colors: ["Neon Green"],
        stock_quantity: 35
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.id).toBeDefined();
  });

  test('PUT /api/admin/orders/:id/status - Should update order status', async () => {
    const ordersRes = await request(app)
      .get('/api/admin/orders')
      .set('Authorization', `Bearer ${adminToken}`);

    const firstOrder = ordersRes.body.data[0];

    const updateRes = await request(app)
      .put(`/api/admin/orders/${firstOrder.id}/status`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ status: 'Delivered' });

    expect(updateRes.statusCode).toEqual(200);
    expect(updateRes.body.success).toBe(true);
  });
});
