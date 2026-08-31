/**
 * SoleSphere SPA Application Engine
 */

// Application State
const State = {
  currentUser: API.getUser(),
  cart: [],
  cartSummary: { itemCount: 0, subtotal: 0 },
  wishlistIds: new Set(),
  activePage: 'home',
  catalogParams: {
    page: 1,
    limit: 12,
    search: '',
    brand: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: 'newest'
  },
  appliedCoupon: null
};

// --- Toast Notification Helper ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  initEventListeners();
  updateAuthUI();
  
  if (State.currentUser) {
    await syncUserCartAndWishlist();
  }

  // Handle initial route
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
});

async function syncUserCartAndWishlist() {
  try {
    const cartRes = await API.getCart();
    State.cart = cartRes.data || [];
    State.cartSummary = cartRes.summary || { itemCount: 0, subtotal: 0 };
    updateCartBadges();

    const wishRes = await API.getWishlist();
    const wishItems = wishRes.data || [];
    State.wishlistIds = new Set(wishItems.map(item => item.product_id));
    updateWishlistBadge();
  } catch (err) {
    console.error('Failed to sync user data:', err);
  }
}

function updateAuthUI() {
  const authWidget = document.getElementById('auth-widget');
  const adminNav = document.getElementById('admin-nav-link');

  if (State.currentUser) {
    authWidget.innerHTML = `
      <div class="user-pill-dropdown" style="display:flex; align-items:center; gap:10px;">
        <span class="user-greeting" style="font-size:0.9rem; font-weight:600;">Hi, ${State.currentUser.name.split(' ')[0]}</span>
        <a href="#profile" class="btn btn-outline btn-xs">Profile</a>
        <button class="btn btn-secondary btn-xs" id="logout-btn">Logout</button>
      </div>
    `;

    document.getElementById('logout-btn').addEventListener('click', () => {
      API.setToken(null);
      API.setUser(null);
      State.currentUser = null;
      State.cart = [];
      State.wishlistIds.clear();
      showToast('Logged out successfully.', 'info');
      updateAuthUI();
      updateCartBadges();
      updateWishlistBadge();
      window.location.hash = '#home';
    });

    if (State.currentUser.role === 'admin') {
      adminNav.style.display = 'inline-block';
    } else {
      adminNav.style.display = 'none';
    }
  } else {
    authWidget.innerHTML = `<button class="btn btn-outline btn-sm" id="open-login-btn">Sign In</button>`;
    document.getElementById('open-login-btn').addEventListener('click', () => openAuthModal());
    adminNav.style.display = 'none';
  }
}

function updateCartBadges() {
  const badge = document.getElementById('cart-badge');
  const headerCount = document.getElementById('cart-count-header');
  const count = State.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) badge.textContent = count;
  if (headerCount) headerCount.textContent = count;
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) badge.textContent = State.wishlistIds.size;
}

// --- Routing ---
function handleHashChange() {
  const rawHash = window.location.hash.replace('#', '') || 'home';
  const parts = rawHash.split('?');
  const page = parts[0] || 'home';

  State.activePage = page;

  // Update navigation link highlights
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
    else link.classList.remove('active');
  });

  const mainView = document.getElementById('app-view');

  if (page === 'home') renderHomeView(mainView);
  else if (page === 'catalog') renderCatalogView(mainView);
  else if (page === 'brands') renderBrandsView(mainView);
  else if (page === 'new-releases') renderNewReleasesView(mainView);
  else if (page === 'profile') renderProfileView(mainView);
  else if (page === 'admin') renderAdminView(mainView);
  else renderHomeView(mainView);
}

// --- View 1: Home View ---
async function renderHomeView(container) {
  container.innerHTML = `
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content fade-in">
          <div class="hero-tag">🔥 SPRING 2026 GRAIL DROPS</div>
          <h1 class="hero-title">ELEVATE YOUR <span class="highlight">SOLE.</span></h1>
          <p class="hero-subtitle">Discover over 100+ authentic rare sneakers, performance basketball kicks, and luxury street footwear with instant worldwide delivery.</p>
          <div class="hero-actions">
            <a href="#catalog" class="btn btn-primary btn-lg">Explore 100+ Grails</a>
            <a href="#new-releases" class="btn btn-outline btn-lg">New Drops</a>
          </div>
        </div>
        <div class="hero-visual fade-in">
          <div class="hero-card-preview" id="hero-feature-preview">
            <div class="skeleton-placeholder" style="height: 380px; background: #1e293b;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands Ticker Bar -->
    <section class="brands-ticker">
      <div class="container brands-flex" id="brands-ticker-container">
        <span class="brand-item-chip">NIKE</span>
        <span class="brand-item-chip">JORDAN</span>
        <span class="brand-item-chip">ADIDAS</span>
        <span class="brand-item-chip">NEW BALANCE</span>
        <span class="brand-item-chip">PUMA</span>
        <span class="brand-item-chip">ASICS</span>
        <span class="brand-item-chip">OFF-WHITE</span>
        <span class="brand-item-chip">CONVERSE</span>
      </div>
    </section>

    <!-- Featured Grails Section -->
    <section class="container" style="padding: 60px 24px;">
      <div class="section-header">
        <div>
          <h2 class="section-title">FEATURED <span class="highlight">GRAILS</span></h2>
          <p class="section-subtitle">Handpicked iconic sneakers trending this week</p>
        </div>
        <a href="#catalog" class="btn btn-outline btn-sm">View All 100+ →</a>
      </div>
      <div class="products-grid" id="home-featured-grid">
        <!-- Injected product cards -->
      </div>
    </section>
  `;

  // Fetch featured products
  try {
    const featuredRes = await API.getProducts({ featured: 'true', limit: 8 });
    const grid = document.getElementById('home-featured-grid');
    grid.innerHTML = featuredRes.data.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents(grid);

    // Hero preview card
    if (featuredRes.data.length > 0) {
      const heroProd = featuredRes.data[0];
      document.getElementById('hero-feature-preview').innerHTML = `
        <div class="product-img-wrap" style="aspect-ratio: 16/10;">
          <img src="${heroProd.images[0]}" alt="${heroProd.name}">
          <div class="product-badge-list">
            <span class="badge badge-accent">FEATURED DROP</span>
          </div>
        </div>
        <div style="padding: 24px; background: rgba(15, 23, 42, 0.9);">
          <div class="product-brand">${heroProd.brand_name}</div>
          <h3 style="font-size: 1.5rem; margin: 4px 0 12px;">${heroProd.name}</h3>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="price-current" style="font-size: 1.6rem;">$${heroProd.price}</span>
            <button class="btn btn-primary btn-sm view-detail-btn" data-id="${heroProd.id}">View Sneaker</button>
          </div>
        </div>
      `;
      document.querySelector('#hero-feature-preview .view-detail-btn').addEventListener('click', () => openProductModal(heroProd.id));
    }
  } catch (err) {
    showToast('Failed to load featured products', 'error');
  }
}

// --- View 2: Catalog View ---
async function renderCatalogView(container) {
  container.innerHTML = `
    <div class="container catalog-layout">
      <!-- Sidebar Filters -->
      <aside class="filter-sidebar">
        <div class="filter-group">
          <div class="filter-title">
            <span>Filter by Brand</span>
            <button class="btn btn-xs btn-outline" id="clear-brand-filter">Clear</button>
          </div>
          <div class="checkbox-list" id="brand-checkbox-list">
            <!-- Brand Checkboxes -->
          </div>
        </div>

        <div class="filter-group">
          <div class="filter-title">
            <span>Category</span>
            <button class="btn btn-xs btn-outline" id="clear-cat-filter">Clear</button>
          </div>
          <div class="checkbox-list" id="category-checkbox-list">
            <!-- Category Checkboxes -->
          </div>
        </div>

        <div class="filter-group">
          <div class="filter-title">Price Range ($)</div>
          <div class="price-inputs">
            <input type="number" id="min-price-input" placeholder="Min" value="${State.catalogParams.minPrice}">
            <span>-</span>
            <input type="number" id="max-price-input" placeholder="Max" value="${State.catalogParams.maxPrice}">
          </div>
          <button class="btn btn-secondary btn-sm btn-block" id="apply-price-filter-btn" style="margin-top: 10px;">Apply Price</button>
        </div>
      </aside>

      <!-- Main Catalog Results -->
      <section>
        <div class="section-header" style="margin-bottom: 24px;">
          <div>
            <h2 class="section-title">SNEAKER <span class="highlight">CATALOG</span></h2>
            <p class="section-subtitle" id="catalog-count-subtitle">Showing all available footwear</p>
          </div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <label for="sort-select" style="font-size: 0.85rem; font-weight: 600;">Sort By:</label>
            <select id="sort-select" class="status-select">
              <option value="newest">Newest Arrivals</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        <div class="products-grid" id="catalog-products-grid">
          <!-- Injected sneakers -->
        </div>

        <div class="pagination-wrap" id="catalog-pagination"></div>
      </section>
    </div>
  `;

  // Load Brand and Category Filter Metadata
  try {
    const [brandsRes, catsRes] = await Promise.all([API.getBrands(), API.getCategories()]);

    const brandListEl = document.getElementById('brand-checkbox-list');
    brandListEl.innerHTML = brandsRes.data.map(b => `
      <label class="checkbox-item">
        <input type="checkbox" class="brand-filter-cb" value="${b.slug}">
        <span>${b.name} (${b.product_count})</span>
      </label>
    `).join('');

    const catListEl = document.getElementById('category-checkbox-list');
    catListEl.innerHTML = catsRes.data.map(c => `
      <label class="checkbox-item">
        <input type="checkbox" class="cat-filter-cb" value="${c.slug}">
        <span>${c.name} (${c.product_count})</span>
      </label>
    `).join('');

    // Attach Filter Event Listeners
    document.querySelectorAll('.brand-filter-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const selected = Array.from(document.querySelectorAll('.brand-filter-cb:checked')).map(c => c.value);
        State.catalogParams.brand = selected.join(',');
        State.catalogParams.page = 1;
        fetchAndRenderCatalog();
      });
    });

    document.querySelectorAll('.cat-filter-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        const selected = Array.from(document.querySelectorAll('.cat-filter-cb:checked')).map(c => c.value);
        State.catalogParams.category = selected.join(',');
        State.catalogParams.page = 1;
        fetchAndRenderCatalog();
      });
    });

    document.getElementById('sort-select').addEventListener('change', (e) => {
      State.catalogParams.sort = e.target.value;
      fetchAndRenderCatalog();
    });

    document.getElementById('apply-price-filter-btn').addEventListener('click', () => {
      State.catalogParams.minPrice = document.getElementById('min-price-input').value;
      State.catalogParams.maxPrice = document.getElementById('max-price-input').value;
      State.catalogParams.page = 1;
      fetchAndRenderCatalog();
    });

    document.getElementById('clear-brand-filter').addEventListener('click', () => {
      document.querySelectorAll('.brand-filter-cb').forEach(c => c.checked = false);
      State.catalogParams.brand = '';
      fetchAndRenderCatalog();
    });

    document.getElementById('clear-cat-filter').addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-cb').forEach(c => c.checked = false);
      State.catalogParams.category = '';
      fetchAndRenderCatalog();
    });

  } catch (err) {
    console.error('Failed to load filter metadata:', err);
  }

  fetchAndRenderCatalog();
}

async function fetchAndRenderCatalog() {
  const grid = document.getElementById('catalog-products-grid');
  const countSub = document.getElementById('catalog-count-subtitle');
  const paginationEl = document.getElementById('catalog-pagination');

  grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">Loading sneakers...</div>';

  try {
    const res = await API.getProducts(State.catalogParams);
    if (res.data.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px;">
          <h3>No sneakers found matching criteria.</h3>
          <p class="text-muted">Try adjusting your brand, category, or search filters.</p>
        </div>
      `;
      countSub.textContent = '0 items found';
      paginationEl.innerHTML = '';
      return;
    }

    countSub.textContent = `Showing ${res.data.length} of ${res.pagination.total} sneakers`;
    grid.innerHTML = res.data.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents(grid);

    // Pagination
    let pageHTML = '';
    for (let i = 1; i <= res.pagination.totalPages; i++) {
      pageHTML += `<button class="page-btn ${i === res.pagination.page ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationEl.innerHTML = pageHTML;
    paginationEl.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        State.catalogParams.page = parseInt(e.target.dataset.page);
        fetchAndRenderCatalog();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

  } catch (err) {
    showToast('Failed to load catalog', 'error');
  }
}

// --- View 3: Brands View ---
async function renderBrandsView(container) {
  container.innerHTML = `
    <div class="container" style="padding: 60px 24px;">
      <div class="section-header">
        <div>
          <h2 class="section-title">OFFICIAL <span class="highlight">BRANDS</span></h2>
          <p class="section-subtitle">Explore premier global footwear labels</p>
        </div>
      </div>
      <div class="products-grid" id="brands-grid"></div>
    </div>
  `;

  try {
    const res = await API.getBrands();
    const grid = document.getElementById('brands-grid');
    grid.innerHTML = res.data.map(b => `
      <div class="product-card" style="cursor: pointer;" onclick="filterByBrand('${b.slug}')">
        <div class="product-img-wrap" style="aspect-ratio: 16/9;">
          <img src="${b.logo_url}" alt="${b.name}">
        </div>
        <div class="product-info">
          <h3 class="product-name" style="font-size: 1.4rem;">${b.name}</h3>
          <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 12px;">${b.description}</p>
          <div style="margin-top: auto;">
            <span class="badge badge-accent">${b.product_count} Sneaker Models</span>
          </div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    showToast('Failed to load brands', 'error');
  }
}

function filterByBrand(slug) {
  State.catalogParams.brand = slug;
  State.catalogParams.page = 1;
  window.location.hash = '#catalog';
}

// --- View 4: New Releases View ---
async function renderNewReleasesView(container) {
  container.innerHTML = `
    <div class="container" style="padding: 60px 24px;">
      <div class="section-header">
        <div>
          <h2 class="section-title">NEW <span class="highlight">RELEASES</span></h2>
          <p class="section-subtitle">Fresh drops direct from 2026 spring catalog</p>
        </div>
      </div>
      <div class="products-grid" id="new-releases-grid"></div>
    </div>
  `;

  try {
    const res = await API.getProducts({ newRelease: 'true', limit: 16 });
    const grid = document.getElementById('new-releases-grid');
    grid.innerHTML = res.data.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents(grid);
  } catch (err) {
    showToast('Failed to load new releases', 'error');
  }
}

// --- View 5: Profile View & Order History ---
async function renderProfileView(container) {
  if (!State.currentUser) {
    container.innerHTML = `
      <div class="container text-center" style="padding: 100px 24px;">
        <h2>Please Sign In</h2>
        <p class="text-muted">You must be logged in to view your profile and order history.</p>
        <button class="btn btn-primary" onclick="openAuthModal()" style="margin-top: 20px;">Sign In</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="container" style="padding: 60px 24px;">
      <div class="section-header">
        <div>
          <h2 class="section-title">MY <span class="highlight">PROFILE</span></h2>
          <p class="section-subtitle">Manage account details and track order history</p>
        </div>
      </div>

      <div class="catalog-layout">
        <!-- Account Info Form -->
        <aside class="filter-sidebar">
          <h3 style="margin-bottom: 20px;">Account Details</h3>
          <form id="profile-update-form">
            <div class="form-group" style="margin-bottom: 12px;">
              <label>Full Name</label>
              <input type="text" id="prof-name" value="${State.currentUser.name}">
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label>Email (Read-only)</label>
              <input type="email" value="${State.currentUser.email}" disabled style="opacity: 0.6;">
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label>Phone</label>
              <input type="text" id="prof-phone" value="${State.currentUser.phone || ''}">
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label>Address</label>
              <input type="text" id="prof-address" value="${State.currentUser.address || ''}">
            </div>
            <button type="submit" class="btn btn-primary btn-sm btn-block">Save Changes</button>
          </form>
        </aside>

        <!-- Order History Timeline -->
        <section>
          <h3 style="margin-bottom: 20px;">Order History</h3>
          <div id="user-orders-container">Loading orders...</div>
        </section>
      </div>
    </div>
  `;

  document.getElementById('profile-update-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const name = document.getElementById('prof-name').value;
      const phone = document.getElementById('prof-phone').value;
      const address = document.getElementById('prof-address').value;

      const res = await API.updateProfile({ name, phone, address });
      State.currentUser = { ...State.currentUser, ...res.user };
      API.setUser(State.currentUser);
      updateAuthUI();
      showToast('Profile updated!', 'success');
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  // Fetch Order History
  try {
    const ordersRes = await API.getOrders();
    const container = document.getElementById('user-orders-container');
    if (ordersRes.data.length === 0) {
      container.innerHTML = '<p class="text-muted">No past orders found.</p>';
      return;
    }

    container.innerHTML = ordersRes.data.map(order => `
      <div class="card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 12px;">
          <div>
            <strong style="font-family: var(--font-mono);">${order.order_number}</strong>
            <span class="text-muted" style="font-size: 0.85rem; margin-left: 12px;">${new Date(order.created_at).toLocaleDateString()}</span>
          </div>
          <span class="badge ${order.status === 'Delivered' ? 'badge-success' : order.status === 'Cancelled' ? 'badge-danger' : 'badge-warning'}">${order.status}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${order.items.map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${item.image_url}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;">
                <div>
                  <div style="font-weight: 700; font-size: 0.9rem;">${item.product_name}</div>
                  <div class="text-muted" style="font-size: 0.8rem;">Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}</div>
                </div>
              </div>
              <div style="font-family: var(--font-mono); font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border-color);">
          <span class="text-muted">Payment: ${order.payment_method}</span>
          <div style="font-size: 1.1rem; font-weight: 800;">Total: <span class="highlight">$${order.total_amount.toFixed(2)}</span></div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load orders:', err);
  }
}

// --- View 6: Admin View ---
async function renderAdminView(container) {
  if (!State.currentUser || State.currentUser.role !== 'admin') {
    container.innerHTML = `
      <div class="container text-center" style="padding: 100px 24px;">
        <h2>Access Denied</h2>
        <p class="text-muted">Administrator credentials required to view this area.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="admin-container">
      <div class="admin-header">
        <div>
          <h2 class="section-title">ADMIN <span class="highlight">DASHBOARD</span></h2>
          <p class="section-subtitle">Platform Analytics, Inventory Control & Order Management</p>
        </div>
        <button class="btn btn-primary btn-sm" id="admin-create-prod-btn">+ Add New Sneaker</button>
      </div>

      <div class="admin-nav-tabs">
        <button class="admin-tab-btn active" data-tab="analytics">📊 Sales Analytics</button>
        <button class="admin-tab-btn" data-tab="products">👟 Products (100+)</button>
        <button class="admin-tab-btn" data-tab="inventory">📦 Inventory Logs</button>
        <button class="admin-tab-btn" data-tab="orders">📑 Orders</button>
        <button class="admin-tab-btn" data-tab="customers">👥 Customers</button>
      </div>

      <div id="admin-tab-content">
        <!-- Injected tab content -->
      </div>
    </div>
  `;

  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadAdminTab(btn.dataset.tab);
    });
  });

  document.getElementById('admin-create-prod-btn').addEventListener('click', () => openAdminProductModal());

  loadAdminTab('analytics');
}

async function loadAdminTab(tab) {
  const container = document.getElementById('admin-tab-content');
  container.innerHTML = '<div style="padding: 40px; text-align: center;">Loading admin telemetry...</div>';

  if (tab === 'analytics') {
    try {
      const data = await API.getAdminDashboard();
      container.innerHTML = `
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-card-title">Total Revenue</span>
            <div class="stat-card-value">$${data.stats.totalRevenue.toLocaleString()}</div>
            <span class="stat-card-sub">↑ 18.4% vs last month</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-title">Total Orders</span>
            <div class="stat-card-value">${data.stats.totalOrders}</div>
            <span class="stat-card-sub">↑ 12 new today</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-title">Active Products</span>
            <div class="stat-card-value">${data.stats.totalProducts}</div>
            <span class="stat-card-sub">Catalog size: 100+</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-title">Registered Customers</span>
            <div class="stat-card-value">${data.stats.totalCustomers}</div>
            <span class="stat-card-sub">Verified buyers</span>
          </div>
        </div>

        <div class="charts-grid">
          <div class="chart-card">
            <div class="chart-title">Revenue & Order Volume Telemetry</div>
            <div class="svg-chart-wrap">
              <svg width="100%" height="100%" viewBox="0 0 600 200">
                <path d="M0,180 Q100,120 200,140 T400,60 T600,20" fill="none" stroke="url(#lineGrad)" stroke-width="4"/>
                <path d="M0,180 Q100,120 200,140 T400,60 T600,20 L600,200 L0,200 Z" fill="url(#areaGrad)" opacity="0.2"/>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3b82f6"/>
                    <stop offset="100%" stop-color="#8b5cf6"/>
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#3b82f6"/>
                    <stop offset="100%" stop-color="transparent"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div class="chart-card">
            <div class="chart-title">Brand Market Share</div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${data.brandSales.slice(0, 5).map(b => `
                <div class="brand-progress-bar">
                  <div class="brand-progress-header">
                    <span>${b.brand_name}</span>
                    <span>$${b.revenue.toLocaleString()}</span>
                  </div>
                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${Math.min(100, (b.revenue / data.stats.totalRevenue) * 200)}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } catch (err) {
      showToast('Failed to load analytics', 'error');
    }
  } else if (tab === 'products') {
    try {
      const res = await API.getProducts({ limit: 100 });
      container.innerHTML = `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Sneaker</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${res.data.map(p => `
                <tr>
                  <td style="display: flex; align-items: center; gap: 12px;">
                    <img src="${p.images[0]}" class="table-img-thumb">
                    <strong>${p.name}</strong>
                  </td>
                  <td>${p.brand_name}</td>
                  <td>${p.category_name}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">$${p.price}</td>
                  <td><span class="badge ${p.stock_quantity < 15 ? 'badge-danger' : 'badge-success'}">${p.stock_quantity} left</span></td>
                  <td>
                    <button class="btn btn-xs btn-outline edit-prod-btn" data-id="${p.id}">Edit</button>
                    <button class="btn btn-xs btn-secondary delete-prod-btn" data-id="${p.id}" style="color: var(--accent-red);">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      container.querySelectorAll('.delete-prod-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (confirm('Are you sure you want to delete this product?')) {
            await API.deleteProduct(btn.dataset.id);
            showToast('Product deleted.', 'info');
            loadAdminTab('products');
          }
        });
      });
    } catch (err) {
      showToast('Failed to load admin product list', 'error');
    }
  } else if (tab === 'orders') {
    try {
      const res = await API.getAdminOrders();
      container.innerHTML = `
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${res.data.map(o => `
                <tr>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${o.order_number}</td>
                  <td>${o.shipping_name}<br><small class="text-muted">${o.customer_email}</small></td>
                  <td>${new Date(o.created_at).toLocaleDateString()}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">$${o.total_amount.toFixed(2)}</td>
                  <td>
                    <select class="status-select order-status-change" data-id="${o.id}">
                      ${['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map(st => `
                        <option value="${st}" ${o.status === st ? 'selected' : ''}>${st}</option>
                      `).join('')}
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      container.querySelectorAll('.order-status-change').forEach(sel => {
        sel.addEventListener('change', async (e) => {
          await API.updateOrderStatus(sel.dataset.id, e.target.value);
          showToast(`Order status updated to ${e.target.value}`, 'success');
        });
      });
    } catch (err) {
      showToast('Failed to load admin orders', 'error');
    }
  } else if (tab === 'inventory' || tab === 'customers') {
    container.innerHTML = `<div style="padding: 40px; text-align: center;">Telemetry logs actively sync with database records.</div>`;
  }
}

// --- Product Quick View Modal ---
async function openProductModal(productId) {
  const modalBackdrop = document.getElementById('product-modal-backdrop');
  const container = document.getElementById('product-detail-content');
  modalBackdrop.classList.remove('hidden');

  container.innerHTML = '<div style="grid-column: 1/-1; padding: 40px; text-align: center;">Loading sneaker specifications...</div>';

  try {
    const res = await API.getProduct(productId);
    const p = res.product;
    const reviewsRes = await API.getReviews(p.id);

    container.innerHTML = `
      <div class="product-detail-gallery">
        <img id="detail-main-img" src="${p.images[0]}" alt="${p.name}">
      </div>

      <div class="product-detail-info">
        <span class="product-brand">${p.brand_name} • ${p.category_name}</span>
        <h2 style="font-size: 1.8rem; margin: 8px 0 12px;">${p.name}</h2>
        
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <span class="price-current" style="font-size: 1.8rem;">$${p.price}</span>
          ${p.original_price ? `<span class="price-orig">$${p.original_price}</span>` : ''}
          <span class="badge ${p.stock_quantity < 15 ? 'badge-danger' : 'badge-success'}">${p.stock_quantity} left</span>
        </div>

        <p class="text-muted" style="margin-bottom: 20px;">${p.description}</p>

        <div style="margin-bottom: 20px;">
          <label style="font-size: 0.9rem; font-weight: 700;">Select US Size:</label>
          <div class="size-selector-grid">
            ${p.sizes_available.map((sz, idx) => `
              <div class="size-chip ${idx === 3 ? 'selected' : ''}" data-size="${sz}">${sz}</div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-bottom: 24px;">
          <button class="btn btn-primary btn-lg btn-block" id="modal-add-cart-btn">Add to Cart</button>
        </div>

        <!-- Customer Reviews Header -->
        <div style="border-top: 1px solid var(--border-color); padding-top: 20px;">
          <h4>Customer Reviews (${reviewsRes.total})</h4>
          <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 12px; max-height: 200px; overflow-y: auto;">
            ${reviewsRes.data.map(r => `
              <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 8px; font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between;">
                  <strong>${r.user_name}</strong>
                  <span class="text-gold">★ ${r.rating}.0</span>
                </div>
                <div style="font-weight: 600; margin: 2px 0;">${r.title}</div>
                <p class="text-muted">${r.comment}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Handle Size Selector
    container.querySelectorAll('.size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });

    // Handle Add to Cart
    document.getElementById('modal-add-cart-btn').addEventListener('click', async () => {
      if (!State.currentUser) {
        openAuthModal();
        return;
      }
      const selectedSizeChip = container.querySelector('.size-chip.selected');
      const size = selectedSizeChip ? selectedSizeChip.dataset.size : '10';

      try {
        await API.addToCart({ product_id: p.id, size, color: p.colors[0] || 'Standard', quantity: 1 });
        await syncUserCartAndWishlist();
        showToast(`Added ${p.name} (Size ${size}) to cart!`, 'success');
        modalBackdrop.classList.add('hidden');
        openCartDrawer();
      } catch (err) {
        showToast(err.message, 'error');
      }
    });

  } catch (err) {
    showToast('Failed to load sneaker details', 'error');
  }
}

// --- Cart Drawer Render ---
function openCartDrawer() {
  renderCartItems();
  document.getElementById('cart-drawer-backdrop').classList.remove('hidden');
  document.getElementById('cart-drawer').classList.remove('hidden');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-backdrop').classList.add('hidden');
  document.getElementById('cart-drawer').classList.add('hidden');
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');

  if (State.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <span style="font-size: 3rem;">🛒</span>
        <h3>Your Cart is Empty</h3>
        <p class="text-muted">Explore 100+ sneakers and add grails to your collection.</p>
      </div>
    `;
    subtotalEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    return;
  }

  container.innerHTML = State.cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.images[0]}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.product_name}</h4>
        <div class="cart-item-spec">Size: ${item.size} | Color: ${item.color}</div>
        <div class="qty-picker">
          <button class="cart-qty-btn" data-id="${item.cart_item_id}" data-action="dec">-</button>
          <span>${item.quantity}</span>
          <button class="cart-qty-btn" data-id="${item.cart_item_id}" data-action="inc">+</button>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-family: var(--font-mono); font-weight: 700;">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="cart-remove-btn" data-id="${item.cart_item_id}" style="color: var(--accent-red); font-size: 0.8rem; margin-top: 8px;">Remove</button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const item = State.cart.find(i => i.cart_item_id == id);
      if (!item) return;

      const newQty = action === 'inc' ? item.quantity + 1 : item.quantity - 1;
      if (newQty <= 0) {
        await API.removeFromCart(id);
      } else {
        await API.updateCartQty(id, newQty);
      }
      await syncUserCartAndWishlist();
      renderCartItems();
    });
  });

  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      await API.removeFromCart(btn.dataset.id);
      await syncUserCartAndWishlist();
      renderCartItems();
    });
  });

  const subtotal = State.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

// --- Helper HTML Generators ---
function createProductCardHTML(p) {
  const isWishlisted = State.wishlistIds.has(p.id);
  return `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        <div class="product-badge-list">
          ${p.is_featured ? '<span class="badge badge-accent">FEATURED</span>' : ''}
          ${p.is_new_release ? '<span class="badge badge-success">NEW DROP</span>' : ''}
        </div>
        <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Wishlist">
          ♥
        </button>
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand_name}</span>
        <h3 class="product-name view-detail-btn" data-id="${p.id}" style="cursor: pointer;">${p.name}</h3>
        <div class="product-meta-row">
          <div class="product-price-wrap">
            <span class="price-current">$${p.price}</span>
            ${p.original_price ? `<span class="price-orig">$${p.original_price}</span>` : ''}
          </div>
          <div class="rating-star-badge">
            ★ <span>${p.rating_avg}</span>
          </div>
        </div>
        <button class="btn btn-primary btn-sm btn-block view-detail-btn" data-id="${p.id}" style="margin-top: 12px;">View & Buy</button>
      </div>
    </div>
  `;
}

function attachProductCardEvents(container) {
  container.querySelectorAll('.view-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.dataset.id));
  });

  container.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (!State.currentUser) {
        openAuthModal();
        return;
      }
      try {
        const pId = btn.dataset.id;
        const res = await API.toggleWishlist(pId);
        if (res.inWishlist) {
          btn.classList.add('active');
          State.wishlistIds.add(parseInt(pId));
          showToast('Added to wishlist!', 'success');
        } else {
          btn.classList.remove('active');
          State.wishlistIds.delete(parseInt(pId));
          showToast('Removed from wishlist.', 'info');
        }
        updateWishlistBadge();
      } catch (err) {
        showToast(err.message, 'error');
      }
    });
  });
}

// --- Auth Modal Handlers ---
function openAuthModal() {
  document.getElementById('auth-modal-backdrop').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal-backdrop').classList.add('hidden');
}

function initEventListeners() {
  // Cart Drawer toggles
  document.getElementById('cart-drawer-btn').addEventListener('click', openCartDrawer);
  document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-backdrop').addEventListener('click', closeCartDrawer);

  // Product Modal close
  document.getElementById('close-product-modal').addEventListener('click', () => {
    document.getElementById('product-modal-backdrop').classList.add('hidden');
  });

  // Auth Modal close
  document.getElementById('close-auth-modal').addEventListener('click', closeAuthModal);

  // Auth Tabs
  document.getElementById('tab-login').addEventListener('click', () => {
    document.getElementById('tab-login').classList.add('active');
    document.getElementById('tab-register').classList.remove('active');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
  });

  document.getElementById('tab-register').addEventListener('click', () => {
    document.getElementById('tab-register').classList.add('active');
    document.getElementById('tab-login').classList.remove('active');
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
  });

  // Demo Fill buttons
  document.getElementById('fill-customer-btn').addEventListener('click', () => {
    document.getElementById('login-email').value = 'demo@solesphere.com';
    document.getElementById('login-password').value = 'Demo@123';
  });

  document.getElementById('fill-admin-btn').addEventListener('click', () => {
    document.getElementById('login-email').value = 'admin@solesphere.com';
    document.getElementById('login-password').value = 'Demo@123';
  });

  // Login Form Submission
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const res = await API.login({ email, password });

      API.setToken(res.token);
      API.setUser(res.user);
      State.currentUser = res.user;

      showToast(`Welcome back, ${res.user.name}!`, 'success');
      closeAuthModal();
      updateAuthUI();
      await syncUserCartAndWishlist();
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  // Checkout trigger
  document.getElementById('proceed-checkout-btn').addEventListener('click', () => {
    if (!State.currentUser) {
      closeCartDrawer();
      openAuthModal();
      return;
    }
    if (State.cart.length === 0) {
      showToast('Cart is empty', 'error');
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });

  // Checkout modal submission
  document.getElementById('close-checkout-modal').addEventListener('click', () => {
    document.getElementById('checkout-modal-backdrop').classList.add('hidden');
  });

  document.getElementById('checkout-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const shipping_name = document.getElementById('checkout-name').value;
      const shipping_address = document.getElementById('checkout-address').value;
      const shipping_city = document.getElementById('checkout-city').value;
      const shipping_postal = document.getElementById('checkout-postal').value;
      const payment_method = document.getElementById('checkout-payment').value;

      const res = await API.placeOrder({
        shipping_name,
        shipping_address,
        shipping_city,
        shipping_postal,
        payment_method
      });

      showToast(`Order ${res.order.order_number} placed successfully!`, 'success');
      document.getElementById('checkout-modal-backdrop').classList.add('hidden');
      await syncUserCartAndWishlist();
      window.location.hash = '#profile';
    } catch (err) {
      showToast(err.message, 'error');
    }
  });
}

function openCheckoutModal() {
  document.getElementById('checkout-modal-backdrop').classList.remove('hidden');
  const summaryBox = document.getElementById('checkout-summary-box');
  const subtotal = State.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  summaryBox.innerHTML = `
    <div style="font-weight: 700; margin-bottom: 8px;">Order Summary (${State.cart.length} items)</div>
    <div style="display: flex; justify-content: space-between; font-size: 0.9rem;">
      <span>Subtotal</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; margin-top: 8px;">
      <span>Estimated Total</span>
      <span class="highlight">$${subtotal.toFixed(2)}</span>
    </div>
  `;
}
