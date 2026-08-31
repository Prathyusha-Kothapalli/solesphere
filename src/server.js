const app = require('./app');
const seed = require('./db/seed');
const db = require('./config/database');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Ensure database is initialized
    const checkTable = await db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='products'");
    if (!checkTable) {
      console.log('⚡ Initializing database schema and seeding demo data...');
      await seed();
    }

    app.listen(PORT, () => {
      console.log(`
======================================================
  👟 SOLESPHERE PREMIUM SNEAKER PLATFORM IS RUNNING!
======================================================
  ➜ Local Server:  http://localhost:${PORT}
  ➜ API Base:      http://localhost:${PORT}/api
  ➜ Environment:   ${process.env.NODE_ENV || 'development'}
======================================================
      `);
    });
  } catch (err) {
    console.error('Failed to start SoleSphere server:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = app;
