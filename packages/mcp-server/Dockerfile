# Build stage
FROM node:20-alpine AS builder

# Install bash for build script
RUN apk add --no-cache bash

# Set working directory
WORKDIR /build

# Copy entire repository
COPY . .

# Install all dependencies and build everything
RUN yarn install --frozen-lockfile && \
    yarn build

# Production stage
FROM node:20-alpine

# Add non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy the built mcp-server dist directory
COPY --from=builder /build/packages/mcp-server/dist ./

# Copy node_modules from mcp-server (includes all production deps)
COPY --from=builder /build/packages/mcp-server/node_modules ./node_modules

# Copy the built @stainless-api/sdk into node_modules
COPY --from=builder /build/dist ./node_modules/@stainless-api/sdk

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# The MCP server uses stdio transport by default
# No exposed ports needed for stdio communication

# Set the entrypoint to the MCP server
ENTRYPOINT ["node", "index.js"]

# Allow passing arguments to the MCP server
CMD []
