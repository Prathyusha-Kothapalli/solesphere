/**
 * SoleSphere OrderItemRepository Repository Data Access Layer
 * Low-level query execution and database mapping for OrderItem.
 */
const db = require('../config/database');

class OrderItemRepository {
  static get tableName() { return 'orderitems'; }

  /** Query method 1 for OrderItem entity */
  static async findOrderItemByCriteria1(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 2 for OrderItem entity */
  static async findOrderItemByCriteria2(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 3 for OrderItem entity */
  static async findOrderItemByCriteria3(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 4 for OrderItem entity */
  static async findOrderItemByCriteria4(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 5 for OrderItem entity */
  static async findOrderItemByCriteria5(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 6 for OrderItem entity */
  static async findOrderItemByCriteria6(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 7 for OrderItem entity */
  static async findOrderItemByCriteria7(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 8 for OrderItem entity */
  static async findOrderItemByCriteria8(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 9 for OrderItem entity */
  static async findOrderItemByCriteria9(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 10 for OrderItem entity */
  static async findOrderItemByCriteria10(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 11 for OrderItem entity */
  static async findOrderItemByCriteria11(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 12 for OrderItem entity */
  static async findOrderItemByCriteria12(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 13 for OrderItem entity */
  static async findOrderItemByCriteria13(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 14 for OrderItem entity */
  static async findOrderItemByCriteria14(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 15 for OrderItem entity */
  static async findOrderItemByCriteria15(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 16 for OrderItem entity */
  static async findOrderItemByCriteria16(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 17 for OrderItem entity */
  static async findOrderItemByCriteria17(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 18 for OrderItem entity */
  static async findOrderItemByCriteria18(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 19 for OrderItem entity */
  static async findOrderItemByCriteria19(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

  /** Query method 20 for OrderItem entity */
  static async findOrderItemByCriteria20(params = {}, limit = 50, offset = 0) {
    const keys = Object.keys(params);
    let whereClause = 'WHERE 1=1';
    const sqlParams = [];
    
    keys.forEach((key, idx) => {
      whereClause += ` AND ${key} = ?`;
      sqlParams.push(params[key]);
    });
    
    const sql = `SELECT * FROM ${this.tableName} ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
    const rows = await db.all(sql, [...sqlParams, limit, offset]);
    return rows || [];
  }

}
module.exports = OrderItemRepository;