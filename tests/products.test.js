const request = require('supertest');
const app = require('../src/app');
const seed = require('../src/db/seed');

describe('2. Product Catalog, Search & Filter API Suite', () => {
  beforeAll(async () => {
    await seed();
  });

  test('GET /api/products - Should return paginated sneakers catalog', async () => {
    const res = await request(app).get('/api/products?page=1&limit=12');

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeLessThanOrEqual(12);
    expect(res.body.pagination.total).toBeGreaterThanOrEqual(100);
  });

  test('GET /api/products - Should filter by brand', async () => {
    const res = await request(app).get('/api/products?brand=nike');

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    res.body.data.forEach(prod => {
      expect(prod.brand_slug).toBe('nike');
    });
  });

  test('GET /api/products - Should perform full-text search', async () => {
    const res = await request(app).get('/api/products?search=Jordan');

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('GET /api/products/:identifier - Should fetch single sneaker details by slug', async () => {
    const catalog = await request(app).get('/api/products?limit=1');
    const firstProd = catalog.body.data[0];

    const res = await request(app).get(`/api/products/${firstProd.slug}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.product.name).toBe(firstProd.name);
    expect(res.body.related.length).toBeGreaterThan(0);
  });

  test('GET /api/meta/brands & /api/meta/categories - Should return brands and categories list', async () => {
    const brands = await request(app).get('/api/meta/brands');
    const categories = await request(app).get('/api/meta/categories');

    expect(brands.body.data.length).toBe(8);
    expect(categories.body.data.length).toBe(12);
  });
});
