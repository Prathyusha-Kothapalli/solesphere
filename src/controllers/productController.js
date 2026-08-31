const db = require('../config/database');

async function getProducts(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;

    const { search, brand, category, minPrice, maxPrice, featured, newRelease, sort } = req.query;

    let whereClause = 'WHERE 1=1';
    const params = [];

    if (search) {
      whereClause += ' AND (p.name LIKE ? OR p.description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    if (brand) {
      const brandList = brand.split(',').map(b => b.trim().toLowerCase());
      whereClause += ` AND LOWER(b.slug) IN (${brandList.map(() => '?').join(',')})`;
      params.push(...brandList);
    }

    if (category) {
      const categoryList = category.split(',').map(c => c.trim().toLowerCase());
      whereClause += ` AND LOWER(c.slug) IN (${categoryList.map(() => '?').join(',')})`;
      params.push(...categoryList);
    }

    if (minPrice) {
      whereClause += ' AND p.price >= ?';
      params.push(parseFloat(minPrice));
    }

    if (maxPrice) {
      whereClause += ' AND p.price <= ?';
      params.push(parseFloat(maxPrice));
    }

    if (featured === 'true' || featured === '1') {
      whereClause += ' AND p.is_featured = 1';
    }

    if (newRelease === 'true' || newRelease === '1') {
      whereClause += ' AND p.is_new_release = 1';
    }

    // Sort options
    let orderBy = 'ORDER BY p.id DESC';
    if (sort === 'price_asc') orderBy = 'ORDER BY p.price ASC';
    else if (sort === 'price_desc') orderBy = 'ORDER BY p.price DESC';
    else if (sort === 'rating') orderBy = 'ORDER BY p.rating_avg DESC';
    else if (sort === 'popular') orderBy = 'ORDER BY p.review_count DESC';
    else if (sort === 'name') orderBy = 'ORDER BY p.name ASC';

    // Count total matching items
    const countSql = `
      SELECT COUNT(*) as total 
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      JOIN categories c ON p.category_id = c.id
      ${whereClause}
    `;
    const countResult = await db.get(countSql, params);
    const totalItems = countResult.total;

    // Fetch items with pagination
    const sql = `
      SELECT 
        p.*, 
        b.name as brand_name, 
        b.slug as brand_slug,
        c.name as category_name, 
        c.slug as category_slug
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      JOIN categories c ON p.category_id = c.id
      ${whereClause}
      ${orderBy}
      LIMIT ? OFFSET ?
    `;

    const products = await db.all(sql, [...params, limit, offset]);

    // Parse JSON strings for frontend convenience
    const formattedProducts = products.map(prod => ({
      ...prod,
      sizes_available: JSON.parse(prod.sizes_available || '[]'),
      colors: JSON.parse(prod.colors || '[]'),
      images: JSON.parse(prod.images || '[]')
    }));

    res.json({
      success: true,
      data: formattedProducts,
      pagination: {
        total: totalItems,
        page,
        limit,
        totalPages: Math.ceil(totalItems / limit)
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getProductByIdOrSlug(req, res, next) {
  try {
    const { identifier } = req.params;
    
    const isNumeric = /^\d+$/.test(identifier);
    const whereSql = isNumeric ? 'p.id = ?' : 'p.slug = ?';

    const sql = `
      SELECT 
        p.*, 
        b.name as brand_name, 
        b.slug as brand_slug,
        c.name as category_name, 
        c.slug as category_slug
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      JOIN categories c ON p.category_id = c.id
      WHERE ${whereSql}
    `;

    const product = await db.get(sql, [identifier]);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Sneaker product not found.' });
    }

    product.sizes_available = JSON.parse(product.sizes_available || '[]');
    product.colors = JSON.parse(product.colors || '[]');
    product.images = JSON.parse(product.images || '[]');

    // Get related products from same brand/category
    const relatedSql = `
      SELECT p.id, p.name, p.slug, p.price, p.original_price, p.images, p.rating_avg, b.name as brand_name
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      WHERE (p.brand_id = ? OR p.category_id = ?) AND p.id != ?
      LIMIT 4
    `;
    const rawRelated = await db.all(relatedSql, [product.brand_id, product.category_id, product.id]);
    const related = rawRelated.map(r => ({
      ...r,
      images: JSON.parse(r.images || '[]')
    }));

    res.json({
      success: true,
      product,
      related
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducts, getProductByIdOrSlug };
