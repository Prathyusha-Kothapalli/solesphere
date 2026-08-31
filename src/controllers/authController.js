const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const { JWT_SECRET } = require('../middleware/auth');

async function register(req, res, next) {
  try {
    const { name, email, password, phone, address, city, postal_code } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
    }

    const existingUser = await db.get('SELECT id FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User with this email already exists.' });
    }

    const password_hash = await bcrypt.hash(password, 10);
    const result = await db.run(
      `INSERT INTO users (name, email, password_hash, role, phone, address, city, postal_code)
       VALUES (?, ?, ?, 'customer', ?, ?, ?, ?)`,
      [name.trim(), email.toLowerCase().trim(), password_hash, phone || null, address || null, city || null, postal_code || null]
    );

    const user = {
      id: result.id,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      role: 'customer'
    };

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      message: 'Account created successfully!',
      token,
      user
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const user = await db.get('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        ...userData,
        phone: user.phone,
        address: user.address,
        city: user.city,
        postal_code: user.postal_code
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getMe(req, res, next) {
  try {
    const user = await db.get('SELECT id, name, email, role, phone, address, city, postal_code, created_at FROM users WHERE id = ?', [req.user.id]);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { name, phone, address, city, postal_code } = req.body;

    await db.run(
      `UPDATE users SET name = COALESCE(?, name), phone = COALESCE(?, phone), address = COALESCE(?, address), city = COALESCE(?, city), postal_code = COALESCE(?, postal_code) WHERE id = ?`,
      [name, phone, address, city, postal_code, req.user.id]
    );

    const updatedUser = await db.get('SELECT id, name, email, role, phone, address, city, postal_code FROM users WHERE id = ?', [req.user.id]);
    res.json({ success: true, message: 'Profile updated successfully!', user: updatedUser });
  } catch (err) {
    next(err);
  }
}

module.exports = { register, login, getMe, updateProfile };
