# SoleSphere Makefile - Automation Tooling

.PHONY: help install seed dev test python-analytics docker-build docker-run clean

help:
	@echo "SoleSphere Makefile Commands:"
	@echo "  make install           - Install npm dependencies"
	@echo "  make seed              - Seed database with 100+ sneakers, reviews & orders"
	@echo "  make dev               - Launch Express development server"
	@echo "  make test              - Run 5 automated test suites"
	@echo "  make python-analytics - Execute Python 3.10 executive telemetry report"
	@echo "  make docker-build      - Build Docker image"
	@echo "  make docker-run        - Launch container via docker-compose"

install:
	npm install

seed:
	npm run seed

dev:
	npm run dev

test:
	npm test

python-analytics:
	python scripts/analytics.py --report

docker-build:
	docker build -t solesphere:latest .

docker-run:
	docker-compose up -d

clean:
	rm -f solesphere.db sales_report.csv
