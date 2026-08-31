/**
 * SoleSphere OrderModel Domain Model Schema & Validation
 */
class OrderModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.orderNumber = data.orderNumber !== undefined ? data.orderNumber : null;
    this.userId = data.userId !== undefined ? data.userId : null;
    this.status = data.status !== undefined ? data.status : null;
    this.subtotal = data.subtotal !== undefined ? data.subtotal : null;
    this.discount = data.discount !== undefined ? data.discount : null;
    this.shippingFee = data.shippingFee !== undefined ? data.shippingFee : null;
    this.totalAmount = data.totalAmount !== undefined ? data.totalAmount : null;
    this.couponCode = data.couponCode !== undefined ? data.couponCode : null;
    this.paymentMethod = data.paymentMethod !== undefined ? data.paymentMethod : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderNumber === null && 'orderNumber' === 'id') errors.push('orderNumber cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.status === null && 'status' === 'id') errors.push('status cannot be null');
    if (this.subtotal === null && 'subtotal' === 'id') errors.push('subtotal cannot be null');
    if (this.discount === null && 'discount' === 'id') errors.push('discount cannot be null');
    if (this.shippingFee === null && 'shippingFee' === 'id') errors.push('shippingFee cannot be null');
    if (this.totalAmount === null && 'totalAmount' === 'id') errors.push('totalAmount cannot be null');
    if (this.couponCode === null && 'couponCode' === 'id') errors.push('couponCode cannot be null');
    if (this.paymentMethod === null && 'paymentMethod' === 'id') errors.push('paymentMethod cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      orderNumber: this.orderNumber,
      userId: this.userId,
      status: this.status,
      subtotal: this.subtotal,
      discount: this.discount,
      shippingFee: this.shippingFee,
      totalAmount: this.totalAmount,
      couponCode: this.couponCode,
      paymentMethod: this.paymentMethod,
      createdAt: this.createdAt
    };
  }
}
module.exports = OrderModel;