/**
 * SoleSphere NotificationModel Domain Model Schema & Validation
 */
class NotificationModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.userId = data.userId !== undefined ? data.userId : null;
    this.type = data.type !== undefined ? data.type : null;
    this.title = data.title !== undefined ? data.title : null;
    this.message = data.message !== undefined ? data.message : null;
    this.isRead = data.isRead !== undefined ? data.isRead : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.userId === null && 'userId' === 'id') errors.push('userId cannot be null');
    if (this.type === null && 'type' === 'id') errors.push('type cannot be null');
    if (this.title === null && 'title' === 'id') errors.push('title cannot be null');
    if (this.message === null && 'message' === 'id') errors.push('message cannot be null');
    if (this.isRead === null && 'isRead' === 'id') errors.push('isRead cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      type: this.type,
      title: this.title,
      message: this.message,
      isRead: this.isRead,
      createdAt: this.createdAt
    };
  }
}
module.exports = NotificationModel;