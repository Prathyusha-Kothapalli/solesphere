const db = require('../config/database');

// Helper to ensure notifications table exists in DB
async function ensureTables() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS user_notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      message TEXT NOT NULL,
      type TEXT DEFAULT 'info',
      is_read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS notification_preferences (
      user_id INTEGER PRIMARY KEY,
      email_alerts INTEGER DEFAULT 1,
      order_updates INTEGER DEFAULT 1,
      promo_alerts INTEGER DEFAULT 0,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
}

// GET /api/notifications
async function getNotifications(req, res, next) {
  try {
    await ensureTables();
    const userId = req.user.id;
    const { unread_only } = req.query;

    let sql = 'SELECT * FROM user_notifications WHERE user_id = ?';
    const params = [userId];

    if (unread_only === 'true') {
      sql += ' AND is_read = 0';
    }
    sql += ' ORDER BY created_at DESC';

    const notifications = await db.all(sql, params);
    
    // Seed default welcome notification if user has none
    if (notifications.length === 0 && !unread_only) {
      await db.run(
        `INSERT INTO user_notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)`,
        [userId, 'Welcome to SoleSphere!', 'Explore our latest drops and exclusive sneaker releases.', 'welcome']
      );
      const seeded = await db.all('SELECT * FROM user_notifications WHERE user_id = ?', [userId]);
      return res.json({ success: true, count: seeded.length, data: seeded });
    }

    res.json({
      success: true,
      count: notifications.length,
      data: notifications
    });
  } catch (error) {
    next(error);
  }
}

// PUT /api/notifications/:id/read
async function markAsRead(req, res, next) {
  try {
    await ensureTables();
    const userId = req.user.id;
    const notificationId = req.params.id;

    const result = await db.run(
      'UPDATE user_notifications SET is_read = 1 WHERE id = ? AND user_id = ?',
      [notificationId, userId]
    );

    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Notification not found or access denied.' });
    }

    res.json({ success: true, message: 'Notification marked as read.' });
  } catch (error) {
    next(error);
  }
}

// PUT /api/notifications/read-all
async function markAllAsRead(req, res, next) {
  try {
    await ensureTables();
    const userId = req.user.id;

    await db.run('UPDATE user_notifications SET is_read = 1 WHERE user_id = ?', [userId]);
    res.json({ success: true, message: 'All notifications marked as read.' });
  } catch (error) {
    next(error);
  }
}

// GET /api/notifications/preferences
async function getPreferences(req, res, next) {
  try {
    await ensureTables();
    const userId = req.user.id;

    let prefs = await db.get('SELECT * FROM notification_preferences WHERE user_id = ?', [userId]);
    if (!prefs) {
      await db.run('INSERT INTO notification_preferences (user_id) VALUES (?)', [userId]);
      prefs = await db.get('SELECT * FROM notification_preferences WHERE user_id = ?', [userId]);
    }

    res.json({ success: true, data: prefs });
  } catch (error) {
    next(error);
  }
}

// PUT /api/notifications/preferences
async function updatePreferences(req, res, next) {
  try {
    await ensureTables();
    const userId = req.user.id;
    const { email_alerts, order_updates, promo_alerts } = req.body;

    await db.run(
      `INSERT INTO notification_preferences (user_id, email_alerts, order_updates, promo_alerts, updated_at)
       VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(user_id) DO UPDATE SET
       email_alerts = excluded.email_alerts,
       order_updates = excluded.order_updates,
       promo_alerts = excluded.promo_alerts,
       updated_at = CURRENT_TIMESTAMP`,
      [userId, email_alerts ? 1 : 0, order_updates ? 1 : 0, promo_alerts ? 1 : 0]
    );

    const updated = await db.get('SELECT * FROM notification_preferences WHERE user_id = ?', [userId]);
    res.json({ success: true, message: 'Notification preferences updated successfully.', data: updated });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getNotifications,
  markAsRead,
  markAllAsRead,
  getPreferences,
  updatePreferences
};
