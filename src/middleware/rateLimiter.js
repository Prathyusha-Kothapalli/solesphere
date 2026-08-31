const ipRequestCounts = new Map();

/**
 * Factory function for sliding window rate-limiting middleware
 * @param {Object} options
 * @param {number} options.windowMs Window size in ms (default 15 minutes)
 * @param {number} options.max Max requests per IP in window (default 100)
 * @param {string} options.message Error message on limit exceedance
 */
function createRateLimiter(options = {}) {
  const windowMs = options.windowMs || 15 * 60 * 1000;
  const max = options.max || 100;
  const message = options.message || 'Too many requests from this IP, please try again later.';

  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const now = Date.now();

    if (!ipRequestCounts.has(ip)) {
      ipRequestCounts.set(ip, []);
    }

    const timestamps = ipRequestCounts.get(ip);
    // Filter timestamps within current sliding window
    const validTimestamps = timestamps.filter(time => now - time < windowMs);
    ipRequestCounts.set(ip, validTimestamps);

    validTimestamps.push(now);
    const remaining = Math.max(0, max - validTimestamps.length);
    const resetTime = Math.ceil((now + windowMs) / 1000);

    res.setHeader('X-RateLimit-Limit', max);
    res.setHeader('X-RateLimit-Remaining', remaining);
    res.setHeader('X-RateLimit-Reset', resetTime);

    if (validTimestamps.length > max) {
      return res.status(429).json({
        success: false,
        message,
        retryAfterSeconds: Math.ceil(windowMs / 1000)
      });
    }
    next();
  };
}

// Reset state helper for testing
function resetLimiterState() {
  ipRequestCounts.clear();
}

module.exports = {
  createRateLimiter,
  resetLimiterState,
  authRateLimiter: createRateLimiter({ windowMs: 15 * 60 * 1000, max: 20, message: 'Too many authentication attempts. Please try again after 15 minutes.' }),
  checkoutRateLimiter: createRateLimiter({ windowMs: 5 * 60 * 1000, max: 10, message: 'Checkout rate limit exceeded. Please wait a few minutes.' })
};
