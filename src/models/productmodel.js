/**
 * SoleSphere ProductModel Domain Model Schema & Validation
 */
class ProductModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.name = data.name !== undefined ? data.name : null;
    this.slug = data.slug !== undefined ? data.slug : null;
    this.brandId = data.brandId !== undefined ? data.brandId : null;
    this.categoryId = data.categoryId !== undefined ? data.categoryId : null;
    this.price = data.price !== undefined ? data.price : null;
    this.originalPrice = data.originalPrice !== undefined ? data.originalPrice : null;
    this.description = data.description !== undefined ? data.description : null;
    this.sizes = data.sizes !== undefined ? data.sizes : null;
    this.colors = data.colors !== undefined ? data.colors : null;
    this.images = data.images !== undefined ? data.images : null;
    this.stockQuantity = data.stockQuantity !== undefined ? data.stockQuantity : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.brandId === null && 'brandId' === 'id') errors.push('brandId cannot be null');
    if (this.categoryId === null && 'categoryId' === 'id') errors.push('categoryId cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.originalPrice === null && 'originalPrice' === 'id') errors.push('originalPrice cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    if (this.sizes === null && 'sizes' === 'id') errors.push('sizes cannot be null');
    if (this.colors === null && 'colors' === 'id') errors.push('colors cannot be null');
    if (this.images === null && 'images' === 'id') errors.push('images cannot be null');
    if (this.stockQuantity === null && 'stockQuantity' === 'id') errors.push('stockQuantity cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      brandId: this.brandId,
      categoryId: this.categoryId,
      price: this.price,
      originalPrice: this.originalPrice,
      description: this.description,
      sizes: this.sizes,
      colors: this.colors,
      images: this.images,
      stockQuantity: this.stockQuantity,
      createdAt: this.createdAt
    };
  }
}
module.exports = ProductModel;