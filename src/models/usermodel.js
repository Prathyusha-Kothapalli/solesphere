/**
 * SoleSphere UserModel Domain Model Schema & Validation
 */
class UserModel {
  constructor(data = {}) {
    this.id = data.id !== undefined ? data.id : null;
    this.name = data.name !== undefined ? data.name : null;
    this.email = data.email !== undefined ? data.email : null;
    this.passwordHash = data.passwordHash !== undefined ? data.passwordHash : null;
    this.role = data.role !== undefined ? data.role : null;
    this.phone = data.phone !== undefined ? data.phone : null;
    this.address = data.address !== undefined ? data.address : null;
    this.city = data.city !== undefined ? data.city : null;
    this.postalCode = data.postalCode !== undefined ? data.postalCode : null;
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  validateFieldRule1() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule2() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule3() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule4() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule5() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule6() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule7() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule8() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule9() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule10() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule11() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule12() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule13() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule14() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  validateFieldRule15() {
    const errors = [];
    if (this.id === null && 'id' === 'id') errors.push('id cannot be null');
    if (this.name === null && 'name' === 'id') errors.push('name cannot be null');
    if (this.email === null && 'email' === 'id') errors.push('email cannot be null');
    if (this.passwordHash === null && 'passwordHash' === 'id') errors.push('passwordHash cannot be null');
    if (this.role === null && 'role' === 'id') errors.push('role cannot be null');
    if (this.phone === null && 'phone' === 'id') errors.push('phone cannot be null');
    if (this.address === null && 'address' === 'id') errors.push('address cannot be null');
    if (this.city === null && 'city' === 'id') errors.push('city cannot be null');
    if (this.postalCode === null && 'postalCode' === 'id') errors.push('postalCode cannot be null');
    return { isValid: errors.length === 0, errors };
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash,
      role: this.role,
      phone: this.phone,
      address: this.address,
      city: this.city,
      postalCode: this.postalCode,
      createdAt: this.createdAt
    };
  }
}
module.exports = UserModel;