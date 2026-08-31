const request = require('supertest');
const express = require('express');
const { createRateLimiter, resetLimiterState } = require('../src/middleware/rateLimiter');

describe('Rate Limiter Middleware Suite', () => {
  let testApp;

  beforeEach(() => {
    resetLimiterState();
    testApp = express();
    testApp.use(express.json());

    const strictLimiter = createRateLimiter({
      windowMs: 60 * 1000,
      max: 3,
      message: 'Rate limit exceeded for test'
    });

    testApp.get('/test-limit', strictLimiter, (req, res) => {
      res.json({ success: true, message: 'Allowed' });
    });
  });

  it('allows requests under the maximum limit and returns rate limit headers', async () => {
    const res = await request(testApp).get('/test-limit');

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.headers['x-ratelimit-limit']).toBe('3');
    expect(res.headers['x-ratelimit-remaining']).toBe('2');
    expect(res.headers['x-ratelimit-reset']).toBeDefined();
  });

  it('blocks requests when the rate limit threshold is exceeded (HTTP 429)', async () => {
    await request(testApp).get('/test-limit');
    await request(testApp).get('/test-limit');
    await request(testApp).get('/test-limit');

    const blockedRes = await request(testApp).get('/test-limit');

    expect(blockedRes.statusCode).toBe(429);
    expect(blockedRes.body.success).toBe(false);
    expect(blockedRes.body.message).toContain('Rate limit exceeded');
    expect(blockedRes.headers['x-ratelimit-remaining']).toBe('0');
  });
});
