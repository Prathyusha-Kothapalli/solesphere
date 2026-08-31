const db = require('../config/database');

async function getBrands(req, res, next) {
  try {
    const brands = await db.all(`
      SELECT b.*, COUNT(p.id) as product_count
      FROM brands b
      LEFT JOIN products p ON b.id = p.brand_id
      GROUP BY b.id
      ORDER BY b.name ASC
    `);
    res.json({ success: true, data: brands });
  } catch (err) {
    next(err);
  }
}

async function getCategories(req, res, next) {
  try {
    const categories = await db.all(`
      SELECT c.*, COUNT(p.id) as product_count
      FROM categories c
      LEFT JOIN products p ON c.id = p.category_id
      GROUP BY c.id
      ORDER BY c.name ASC
    `);
    res.json({ success: true, data: categories });
  } catch (err) {
    next(err);
  }
}

module.exports = { getBrands, getCategories };
