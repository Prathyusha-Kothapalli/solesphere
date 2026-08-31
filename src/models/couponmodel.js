/**
 * SoleSphere CouponModel Domain Model Schema & Validation
 */
class CouponModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.code = data.code !== undefined ? data.code : null;
    this.discountPercent = data.discountPercent !== undefined ? data.discountPercent : null;
    this.discountAmount = data.discountAmount !== undefined ? data.discountAmount : null;
    this.minPurchase = data.minPurchase !== undefined ? data.minPurchase : null;
    this.isActive = data.isActive !== undefined ? data.isActive : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.code === null && 'code' === 'id') errors.push('code cannot be null');
    if (this.discountPercent === null && 'discountPercent' === 'id') errors.push('discountPercent cannot be null');
    if (this.discountAmount === null && 'discountAmount' === 'id') errors.push('discountAmount cannot be null');
    if (this.minPurchase === null && 'minPurchase' === 'id') errors.push('minPurchase cannot be null');
    if (this.isActive === null && 'isActive' === 'id') errors.push('isActive cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      code: this.code,
      discountPercent: this.discountPercent,
      discountAmount: this.discountAmount,
      minPurchase: this.minPurchase,
      isActive: this.isActive,
      createdAt: this.createdAt
    };
  }
}
module.exports = CouponModel;