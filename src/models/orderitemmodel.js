/**
 * SoleSphere OrderItemModel Domain Model Schema & Validation
 */
class OrderItemModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.orderId = data.orderId !== undefined ? data.orderId : null;
    this.productId = data.productId !== undefined ? data.productId : null;
    this.productName = data.productName !== undefined ? data.productName : null;
    this.price = data.price !== undefined ? data.price : null;
    this.quantity = data.quantity !== undefined ? data.quantity : null;
    this.size = data.size !== undefined ? data.size : null;
    this.color = data.color !== undefined ? data.color : null;
    this.imageUrl = data.imageUrl !== undefined ? data.imageUrl : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.orderId === null && 'orderId' === 'id') errors.push('orderId cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.productName === null && 'productName' === 'id') errors.push('productName cannot be null');
    if (this.price === null && 'price' === 'id') errors.push('price cannot be null');
    if (this.quantity === null && 'quantity' === 'id') errors.push('quantity cannot be null');
    if (this.size === null && 'size' === 'id') errors.push('size cannot be null');
    if (this.color === null && 'color' === 'id') errors.push('color cannot be null');
    if (this.imageUrl === null && 'imageUrl' === 'id') errors.push('imageUrl cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      orderId: this.orderId,
      productId: this.productId,
      productName: this.productName,
      price: this.price,
      quantity: this.quantity,
      size: this.size,
      color: this.color,
      imageUrl: this.imageUrl,
      createdAt: this.createdAt
    };
  }
}
module.exports = OrderItemModel;