const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');
const jwt = require('jsonwebtoken');

describe('Order Fulfillment & Shipment Tracking Suite', () => {
  let adminToken;
  let customerToken;
  let trackingNumber = `TRACK-TEST-${Date.now()}`;

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

  it('POST /api/shipments/create - admin creates shipment dispatch', async () => {
    const res = await request(app)
      .post('/api/shipments/create')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        order_id: 1,
        courier: 'FedEx Express',
        tracking_number: trackingNumber,
        destination: '742 Evergreen Terrace, Springfield',
        days_to_deliver: 3
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.tracking_number).toBe(trackingNumber);
  });

  it('GET /api/shipments/track/:trackingNumber - public tracking lookup', async () => {
    const res = await request(app).get(`/api/shipments/track/${trackingNumber}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.courier).toBe('FedEx Express');
    expect(Array.isArray(res.body.data.timeline)).toBe(true);
  });

  it('PUT /api/shipments/update-status - admin updates status to Delivered', async () => {
    const res = await request(app)
      .put('/api/shipments/update-status')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        tracking_number: trackingNumber,
        status: 'Delivered'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.status).toBe('Delivered');
  });

  it('GET /api/shipments/order/:orderId - user fetches shipment for order #1', async () => {
    const res = await request(app)
      .get('/api/shipments/order/1')
      .set('Authorization', `Bearer ${customerToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.order_id).toBe(1);
  });
});
