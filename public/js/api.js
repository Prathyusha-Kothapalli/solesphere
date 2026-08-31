/**
 * SoleSphere API Client Wrapper
 */
const API = (() => {
  const BASE_URL = '/api';

  function getToken() {
    return localStorage.getItem('solesphere_token');
  }

  function setToken(token) {
    if (token) localStorage.setItem('solesphere_token', token);
    else localStorage.removeItem('solesphere_token');
  }

  function getUser() {
    const raw = localStorage.getItem('solesphere_user');
    return raw ? JSON.parse(raw) : null;
  }

  function setUser(user) {
    if (user) localStorage.setItem('solesphere_user', JSON.stringify(user));
    else localStorage.removeItem('solesphere_user');
  }

  async function request(endpoint, options = {}) {
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API Request Failed');
      }

      return data;
    } catch (err) {
      console.error(`API Error [${endpoint}]:`, err);
      throw err;
    }
  }

  return {
    getToken,
    setToken,
    getUser,
    setUser,

    // Auth
    register: (body) => request('/auth/register', { method: 'POST', body: JSON.stringify(body) }),
    login: (body) => request('/auth/login', { method: 'POST', body: JSON.stringify(body) }),
    getMe: () => request('/auth/me'),
    updateProfile: (body) => request('/auth/profile', { method: 'PUT', body: JSON.stringify(body) }),

    // Meta
    getBrands: () => request('/meta/brands'),
    getCategories: () => request('/meta/categories'),

    // Products
    getProducts: (params = {}) => {
      const query = new URLSearchParams(params).toString();
      return request(`/products?${query}`);
    },
    getProduct: (idOrSlug) => request(`/products/${idOrSlug}`),

    // Cart & Wishlist
    getCart: () => request('/user/cart'),
    addToCart: (item) => request('/user/cart', { method: 'POST', body: JSON.stringify(item) }),
    updateCartQty: (id, qty) => request(`/user/cart/${id}`, { method: 'PUT', body: JSON.stringify({ quantity: qty }) }),
    removeFromCart: (id) => request(`/user/cart/${id}`, { method: 'DELETE' }),
    clearCart: () => request('/user/cart', { method: 'DELETE' }),

    getWishlist: () => request('/user/wishlist'),
    toggleWishlist: (product_id) => request('/user/wishlist/toggle', { method: 'POST', body: JSON.stringify({ product_id }) }),

    // Orders
    validateCoupon: (code, subtotal) => request('/orders/coupon/validate', { method: 'POST', body: JSON.stringify({ code, subtotal }) }),
    placeOrder: (body) => request('/orders', { method: 'POST', body: JSON.stringify(body) }),
    getOrders: () => request('/orders'),
    getOrderDetails: (orderNum) => request(`/orders/${orderNum}`),

    // Reviews
    getReviews: (productId) => request(`/reviews/product/${productId}`),
    addReview: (body) => request('/reviews', { method: 'POST', body: JSON.stringify(body) }),

    // Admin
    getAdminDashboard: () => request('/admin/dashboard'),
    getAdminInventory: () => request('/admin/inventory'),
    getAdminOrders: (params = {}) => {
      const query = new URLSearchParams(params).toString();
      return request(`/admin/orders?${query}`);
    },
    updateOrderStatus: (id, status) => request(`/admin/orders/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }),
    getAdminCustomers: () => request('/admin/customers'),
    createProduct: (body) => request('/admin/products', { method: 'POST', body: JSON.stringify(body) }),
    updateProduct: (id, body) => request(`/admin/products/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
    deleteProduct: (id) => request(`/admin/products/${id}`, { method: 'DELETE' })
  };
})();
