#!/usr/bin/env python3
"""
SoleSphere Python 3.10+ Executive Data Analytics & Inventory Telemetry Tool
Queries SoleSphere SQLite database to generate revenue reports, brand share metrics,
inventory alerts, and CSV data exports.
"""

import sqlite3
import os
import sys
import csv
import argparse
from datetime import datetime

# Enforce UTF-8 stdout encoding on Windows
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

DB_PATH = os.path.join(os.path.dirname(__file__), '../solesphere.db')


def get_connection():
    if not os.path.exists(DB_PATH):
        print(f"❌ Error: Database file not found at {DB_PATH}. Please run 'npm run seed' first.")
        sys.exit(1)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def generate_executive_report():
    conn = get_connection()
    cursor = conn.cursor()

    print("==========================================================")
    print(" 👟 SOLESPHERE EXECUTIVE TELEMETRY & ANALYTICS REPORT")
    print(f" Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("==========================================================")

    # 1. Total Metrics
    cursor.execute("SELECT SUM(total_amount) as total_revenue, COUNT(*) as total_orders FROM orders WHERE status != 'Cancelled'")
    res = cursor.fetchone()
    revenue = res['total_revenue'] or 0.0
    orders_cnt = res['total_orders'] or 0

    cursor.execute("SELECT COUNT(*) as total_prods FROM products")
    prods_cnt = cursor.fetchone()['total_prods']

    cursor.execute("SELECT COUNT(*) as total_custs FROM users WHERE role = 'customer'")
    custs_cnt = cursor.fetchone()['total_custs']

    print(f"\n📊 FINANCIAL & OPERATIONAL OVERVIEW:")
    print(f"  • Total Gross Revenue: ${revenue:,.2f}")
    print(f"  • Total Orders Placed: {orders_cnt}")
    print(f"  • Average Order Value:  ${(revenue / orders_cnt if orders_cnt else 0):,.2f}")
    print(f"  • Active Product Models:{prods_cnt} (100+ Catalog)")
    print(f"  • Registered Customers: {custs_cnt}")

    # 2. Brand Revenue Breakdown
    print(f"\n🏷️  BRAND SALES PERFORMANCE:")
    cursor.execute("""
        SELECT b.name as brand_name, COUNT(DISTINCT o.id) as order_count, SUM(oi.price * oi.quantity) as brand_rev
        FROM order_items oi
        JOIN products p ON oi.product_id = p.id
        JOIN brands b ON p.brand_id = b.id
        JOIN orders o ON oi.order_id = o.id
        WHERE o.status != 'Cancelled'
        GROUP BY b.id
        ORDER BY brand_rev DESC
    """)
    for row in cursor.fetchall():
        b_name = row['brand_name']
        b_rev = row['brand_rev'] or 0.0
        pct = (b_rev / revenue * 100) if revenue > 0 else 0.0
        bar = "█" * int(pct / 5)
        print(f"  {b_name:<15} | ${b_rev:>9,.2f} ({pct:>5.1f}%) {bar}")

    # 3. Low Stock Inventory Warnings
    print(f"\n⚠️  LOW STOCK INVENTORY ALERTS (Stock <= 15):")
    cursor.execute("SELECT p.name, p.stock_quantity, b.name as brand_name FROM products p JOIN brands b ON p.brand_id = b.id WHERE p.stock_quantity <= 15 ORDER BY p.stock_quantity ASC LIMIT 10")
    low_stocks = cursor.fetchall()
    if not low_stocks:
        print("  ✅ All inventory levels healthy.")
    else:
        for row in low_stocks:
            print(f"  • [{row['brand_name']}] {row['name']:<45} Stock: {row['stock_quantity']} units")

    print("\n==========================================================")
    conn.close()

def export_sales_csv(output_file="sales_report.csv"):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT o.order_number, o.created_at, u.name as customer_name, u.email, o.status, o.subtotal, o.discount, o.shipping_fee, o.total_amount, o.payment_method
        FROM orders o
        JOIN users u ON o.user_id = u.id
        ORDER BY o.created_at DESC
    """)
    rows = cursor.fetchall()

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Order Number', 'Date', 'Customer Name', 'Email', 'Status', 'Subtotal', 'Discount', 'Shipping', 'Total Amount', 'Payment Method'])
        for r in rows:
            writer.writerow([r['order_number'], r['created_at'], r['customer_name'], r['email'], r['status'], r['subtotal'], r['discount'], r['shipping_fee'], r['total_amount'], r['payment_method']])

    print(f"✅ Sales report exported successfully to: {output_file}")
    conn.close()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="SoleSphere Executive Data Analytics Suite")
    parser.add_argument('--report', action='store_true', help="Print executive telemetry report")
    parser.add_argument('--export-csv', type=str, metavar="FILENAME", nargs='?', const="sales_report.csv", help="Export sales log to CSV file")

    args = parser.parse_args()

    if args.export_csv:
        export_sales_csv(args.export_csv)
    else:
        generate_executive_report()
