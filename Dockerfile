# SoleSphere Enterprise Docker Container Configuration
FROM node:20-alpine AS base

WORKDIR /app

# Install system build dependencies for SQLite3
RUN apk add --no-color --no-cache python3 make g++

# Copy dependency specifications
COPY package.json package-lock.json ./

# Install production and development dependencies
RUN npm ci

# Copy source application code
COPY . .

# Expose server port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Auto-seed database on container startup if database file missing & start Express server
CMD ["node", "src/server.js"]
