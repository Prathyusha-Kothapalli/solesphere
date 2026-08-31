/**
 * SoleSphere BrandModel Domain Model Schema & Validation
 */
class BrandModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.name = data.name !== undefined ? data.name : null;
    this.slug = data.slug !== undefined ? data.slug : null;
    this.logoUrl = data.logoUrl !== undefined ? data.logoUrl : null;
    this.description = data.description !== undefined ? data.description : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.slug === null && 'slug' === 'id') errors.push('slug cannot be null');
    if (this.logoUrl === null && 'logoUrl' === 'id') errors.push('logoUrl cannot be null');
    if (this.description === null && 'description' === 'id') errors.push('description cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      slug: this.slug,
      logoUrl: this.logoUrl,
      description: this.description,
      createdAt: this.createdAt
    };
  }
}
module.exports = BrandModel;