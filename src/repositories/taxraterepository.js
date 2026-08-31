/**
 * SoleSphere Enterprise TaxRateRepository Data Access Layer
 */
const db = require('../config/database');

class TaxRateRepository {
  static get tableName() { return 'taxrates'; }

  /** Database Query Strategy 1 for TaxRate */
  static async queryTaxRateByStrategy1(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 2 for TaxRate */
  static async queryTaxRateByStrategy2(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 3 for TaxRate */
  static async queryTaxRateByStrategy3(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 4 for TaxRate */
  static async queryTaxRateByStrategy4(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 5 for TaxRate */
  static async queryTaxRateByStrategy5(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 6 for TaxRate */
  static async queryTaxRateByStrategy6(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 7 for TaxRate */
  static async queryTaxRateByStrategy7(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 8 for TaxRate */
  static async queryTaxRateByStrategy8(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 9 for TaxRate */
  static async queryTaxRateByStrategy9(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 10 for TaxRate */
  static async queryTaxRateByStrategy10(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 11 for TaxRate */
  static async queryTaxRateByStrategy11(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 12 for TaxRate */
  static async queryTaxRateByStrategy12(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 13 for TaxRate */
  static async queryTaxRateByStrategy13(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 14 for TaxRate */
  static async queryTaxRateByStrategy14(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 15 for TaxRate */
  static async queryTaxRateByStrategy15(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 16 for TaxRate */
  static async queryTaxRateByStrategy16(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 17 for TaxRate */
  static async queryTaxRateByStrategy17(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 18 for TaxRate */
  static async queryTaxRateByStrategy18(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 19 for TaxRate */
  static async queryTaxRateByStrategy19(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 20 for TaxRate */
  static async queryTaxRateByStrategy20(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 21 for TaxRate */
  static async queryTaxRateByStrategy21(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 22 for TaxRate */
  static async queryTaxRateByStrategy22(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 23 for TaxRate */
  static async queryTaxRateByStrategy23(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 24 for TaxRate */
  static async queryTaxRateByStrategy24(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 25 for TaxRate */
  static async queryTaxRateByStrategy25(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 26 for TaxRate */
  static async queryTaxRateByStrategy26(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 27 for TaxRate */
  static async queryTaxRateByStrategy27(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 28 for TaxRate */
  static async queryTaxRateByStrategy28(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 29 for TaxRate */
  static async queryTaxRateByStrategy29(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 30 for TaxRate */
  static async queryTaxRateByStrategy30(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 31 for TaxRate */
  static async queryTaxRateByStrategy31(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 32 for TaxRate */
  static async queryTaxRateByStrategy32(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 33 for TaxRate */
  static async queryTaxRateByStrategy33(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 34 for TaxRate */
  static async queryTaxRateByStrategy34(criteria = {}, page = 1, limit = 50) {
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

  /** Database Query Strategy 35 for TaxRate */
  static async queryTaxRateByStrategy35(criteria = {}, page = 1, limit = 50) {
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
module.exports = TaxRateRepository;