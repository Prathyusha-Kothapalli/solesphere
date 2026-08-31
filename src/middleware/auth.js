const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'solesphere_super_secret_jwt_key_2026';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') 
    ? authHeader.split(' ')[1] 
    : req.query.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required. Please login.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid or expired token.' });
    }
    req.user = user;
    next();
  });
}

// Optional Auth (populates req.user if token is present, but does not block request if unauthenticated)
function optionalToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') 
    ? authHeader.split(' ')[1] 
    : req.query.token;

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (!err) req.user = user;
      next();
    });
  } else {
    next();
  }
}

module.exports = { authenticateToken, optionalToken, JWT_SECRET };
