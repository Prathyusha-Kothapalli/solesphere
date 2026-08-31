# 👟 SoleSphere — Enterprise Grade Premium Sneaker E-Commerce Platform

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![SQLite](https://img.shields.io/badge/Database-SQLite3-blue.svg)](https://sqlite.org/)
[![Python](https://img.shields.io/badge/Python-3.10%2B-yellow.svg)](https://python.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-cyan.svg)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

**SoleSphere** is a production-quality, high-performance Premium Sneaker E-Commerce Platform built with Node.js, Express, SQLite, Vanilla HTML5/CSS3/ES6+, and Python 3.10+. Designed for scale and portfolio excellence, SoleSphere features a luxury dark-mode responsive Single Page Application (SPA), interactive sales & inventory analytics, multi-faceted product filtering, automated checkout, coupon engine, and 5 automated test suites.

---

## 🌟 Key Features

### 🛍️ Customer Experience
- **100+ Authentic Sneakers Catalog**: Procedurally seeded across 8 premier brands (*Nike, Jordan, Adidas, New Balance, Puma, Asics, Off-White, Converse*) and 12 categories.
- **Advanced Multi-Faceted Filters**: Live search bar, brand checkboxes, category pills, price range inputs, and real-time sorting (Price low/high, Popularity, Rating, Newest).
- **Interactive Product Details**: Multi-angle image views, size selection grid (7–13), colorway badges, live stock availability warnings, and verified customer reviews.
- **Shopping Cart & Wishlist**: Persistent cart drawer with quantity steppers, item removal, discount promo code box (`WELCOME10`, `SOLE20`, `VIP30`), and wishlist toggles.
- **Checkout & Order History**: Instant order placement flow with address validation, payment method selector, order tracking timeline, and order status breakdown.

### ⚡ Admin Management & Analytics
- **Executive Sales Dashboard**: Real-time KPI cards (Total Revenue, Orders Placed, Active Catalog Size, Low-Stock Warnings).
- **Visual Analytics Charts**: Brand market share progress bars and SVG revenue trend graph.
- **Product CRUD & Inventory Controls**: Full control to add new sneakers, edit specs/prices, adjust stock levels, and view historical inventory audit logs.
- **Order Status Workflow**: Update order states (`Pending` ➔ `Processing` ➔ `Shipped` ➔ `Delivered` ➔ `Cancelled`).

### 🐍 Python 3.10+ Telemetry Suite
- Command-line data analytics script (`scripts/analytics.py`) that queries the SQLite database to generate ASCII telemetry reports and export order histories to CSV.

---

## 🔑 Demo Access Credentials

| Role | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@solesphere.com` | `Demo@123` | Full Admin Dashboard, Inventory, Orders, CRUD |
| **Customer** | `demo@solesphere.com` | `Demo@123` | Catalog, Cart, Wishlist, Checkout, Order Tracking |

---

## 🏗️ System Architecture

```
                       +-----------------------------------+
                       |   SoleSphere SPA Frontend (Web)   |
                       |  HTML5 / Modern Vanilla CSS / JS  |
                       +-----------------+-----------------+
                                         |
                                         | REST API (JWT Auth)
                                         v
                       +-----------------+-----------------+
                       |    Express.js Node Backend      |
                       | Middleware / Validation / CORS   |
                       +--------+-----------------+--------+
                                |                 |
            SQLite SQL Queries  |                 | Direct DB Query
                                v                 v
                       +-----------------+   +-----------------+
                       |  solesphere.db  |   | Python 3.10+    |
                       | (Local SQL DB)  |   | Analytics CLI   |
                       +-----------------+   +-----------------+
```

---

## 🚀 5 Development Feature Phases

1. **Phase 1: Core Architecture, Database Schema & Auto-Seeding**
   - SQLite Database initialization, promisified query wrapper, schema migration (`schema.sql`).
   - Seeding script (`seed.js`) generating 108 sneakers, 8 brands, 12 categories, 50 reviews, and 20 completed demo orders.
2. **Phase 2: Authentication, Security & Role-Based Authorization**
   - Password hashing with `bcryptjs`, JWT token issuance, auth middleware (`auth.js`), and admin role guard (`admin.js`).
3. **Phase 3: Customer Features & REST APIs**
   - Products API with pagination & filtering, Cart & Wishlist persistence, Coupon validation, and Order placement.
4. **Phase 4: Admin Portal & Modern Glassmorphism SPA**
   - Luxury boutique dark UI with CSS custom properties, responsive slide-over cart drawer, quick detail modals, and Admin Dashboard.
5. **Phase 5: Python 3.10 Analytics, Automated Tests, Docker & Documentation**
   - Python CLI analytics script, 5 Jest/Supertest test suites, Docker containers, Makefile, and complete README.

---

## 🛠️ Quick Start & Running Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Python**: 3.10+ (Optional for analytics script)
- **Docker**: (Optional for containerization)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/solesphere.git
cd solesphere
npm install
```

### 2. Seed Database
```bash
npm run seed
```
*(Creates `solesphere.db` with 108 sneakers, 50 reviews, 20 orders, and test accounts)*

### 3. Launch Development Server
```bash
npm run dev
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser!

---

## 📊 Running Python Analytics Tool

```bash
python scripts/analytics.py --report
```
*Outputs gross revenue, average order value, brand market share ASCII chart, and low stock warnings.*

To export sales log to CSV:
```bash
python scripts/analytics.py --export-csv sales_report.csv
```

---

## 🧪 Automated Testing

Execute all 5 automated Jest test files covering Auth, Products, Orders, Cart/Wishlist, and Admin Analytics:

```bash
npm test
```

---

## 🐳 Docker Deployment

### Using Docker Compose
```bash
docker-compose up -d
```
Access the application at `http://localhost:5000`.

---

## 🛠️ Makefile Commands

| Command | Description |
| :--- | :--- |
| `make install` | Install npm dependencies |
| `make seed` | Reset & re-seed SQLite database |
| `make dev` | Start Express server on port 5000 |
| `make test` | Run 5 Jest automated test suites |
| `make python-analytics` | Run Python 3.10 executive telemetry report |
| `make docker-build` | Build Docker container image |
| `make docker-run` | Launch via docker-compose |

---

## 📡 API Endpoints Reference

### Auth
- `POST /api/auth/register` - Create customer account
- `POST /api/auth/login` - Authenticate & obtain JWT
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update profile info

### Products & Meta
- `GET /api/products` - List sneakers (supports `page`, `limit`, `search`, `brand`, `category`, `minPrice`, `maxPrice`, `sort`)
- `GET /api/products/:identifier` - Get single sneaker specs by ID or slug
- `GET /api/meta/brands` - List 8 sneaker brands
- `GET /api/meta/categories` - List 12 categories

### Cart & Wishlist
- `GET /api/user/cart` - Get user cart items
- `POST /api/user/cart` - Add item to cart
- `PUT /api/user/cart/:id` - Update quantity
- `DELETE /api/user/cart/:id` - Remove item
- `GET /api/user/wishlist` - Get wishlist
- `POST /api/user/wishlist/toggle` - Toggle wishlist status

### Orders
- `POST /api/orders/coupon/validate` - Validate promo code
- `POST /api/orders` - Place checkout order
- `GET /api/orders` - Get customer order history

### Admin
- `GET /api/admin/dashboard` - Get revenue & telemetry metrics
- `GET /api/admin/orders` - List all orders
- `PUT /api/admin/orders/:id/status` - Update order status
- `POST /api/admin/products` - Create new sneaker product
- `PUT /api/admin/products/:id` - Edit product specs
- `DELETE /api/admin/products/:id` - Delete product

---

## 📜 License
SoleSphere is licensed under the [MIT License](LICENSE).
