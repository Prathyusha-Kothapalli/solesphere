const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');
const jwt = require('jsonwebtoken');

describe('Notification API Suite', () => {
  let authToken;

  beforeAll(async () => {
    await seed();
    authToken = jwt.sign(
      { id: 2, email: 'demo@solesphere.com', role: 'customer' },
      process.env.JWT_SECRET || 'solesphere_super_secret_jwt_key_2026',
      { expiresIn: '1h' }
    );
  });

  it('GET /api/notifications - fetch notifications for user', async () => {
    const res = await request(app)
      .get('/api/notifications')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/notifications/preferences - fetch notification preferences', async () => {
    const res = await request(app)
      .get('/api/notifications/preferences')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('email_alerts');
  });

  it('PUT /api/notifications/preferences - update notification preferences', async () => {
    const res = await request(app)
      .put('/api/notifications/preferences')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        email_alerts: true,
        order_updates: true,
        promo_alerts: false
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.promo_alerts).toBe(0);
  });

  it('PUT /api/notifications/read-all - mark all as read', async () => {
    const res = await request(app)
      .put('/api/notifications/read-all')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
