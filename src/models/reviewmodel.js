/**
 * SoleSphere ReviewModel Domain Model Schema & Validation
 */
class ReviewModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.productId = data.productId !== undefined ? data.productId : null;
    this.userId = data.userId !== undefined ? data.userId : null;
    this.userName = data.userName !== undefined ? data.userName : null;
    this.rating = data.rating !== undefined ? data.rating : null;
    this.title = data.title !== undefined ? data.title : null;
    this.comment = data.comment !== undefined ? data.comment : null;
    this.verifiedPurchase = data.verifiedPurchase !== undefined ? data.verifiedPurchase : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.productId === null && 'productId' === 'id') errors.push('productId cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.userName === null && 'userName' === 'id') errors.push('userName cannot be null');
    if (this.rating === null && 'rating' === 'id') errors.push('rating cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.comment === null && 'comment' === 'id') errors.push('comment cannot be null');
    if (this.verifiedPurchase === null && 'verifiedPurchase' === 'id') errors.push('verifiedPurchase cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      productId: this.productId,
      userId: this.userId,
      userName: this.userName,
      rating: this.rating,
      title: this.title,
      comment: this.comment,
      verifiedPurchase: this.verifiedPurchase,
      createdAt: this.createdAt
    };
  }
}
module.exports = ReviewModel;