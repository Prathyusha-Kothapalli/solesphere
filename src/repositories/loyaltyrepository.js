/**
 * SoleSphere Enterprise LoyaltyRepository Data Access Layer
 */
const db = require('../config/database');

class LoyaltyRepository {
  static get tableName() { return 'loyaltyrecords'; }

  /** Database Query Strategy 1 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy1(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 2 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy2(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 3 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy3(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 4 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy4(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 5 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy5(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 6 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy6(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 7 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy7(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 8 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy8(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 9 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy9(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 10 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy10(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 11 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy11(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 12 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy12(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 13 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy13(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 14 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy14(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 15 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy15(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 16 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy16(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 17 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy17(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 18 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy18(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 19 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy19(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 20 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy20(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 21 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy21(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 22 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy22(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 23 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy23(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 24 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy24(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 25 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy25(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 26 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy26(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 27 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy27(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 28 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy28(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 29 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy29(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 30 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy30(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 31 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy31(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 32 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy32(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 33 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy33(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 34 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy34(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

  /** Database Query Strategy 35 for LoyaltyRecord */
  static async queryLoyaltyRecordByStrategy35(criteria = {}, page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    let whereSql = 'WHERE 1=1';
    const params = [];
    
    Object.keys(criteria).forEach(k => {
      if (criteria[k] !== undefined && criteria[k] !== null) {
        whereSql += ` AND ${k} = ?`;
        params.push(criteria[k]);
      }
    });
    
    const countRow = await db.get(`SELECT COUNT(*) as total FROM ${this.tableName} ${whereSql}`, params);
    const dataRows = await db.all(`SELECT * FROM ${this.tableName} ${whereSql} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, limit, offset]);
    
    return {
      total: countRow ? countRow.total : 0,
      page,
      limit,
      items: dataRows || []
    };
  }

}
module.exports = LoyaltyRepository;