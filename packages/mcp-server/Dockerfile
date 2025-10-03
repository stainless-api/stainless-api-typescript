# Build stage
FROM node:20-alpine AS builder

# Enable corepack to use pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install bash for build script
RUN apk add --no-cache bash

# Set working directory
WORKDIR /build

# Copy entire repository
COPY . .

# Install all dependencies and build everything
RUN pnpm install --frozen-lockfile && \
    pnpm build

# Production stage
FROM node:20-alpine

# Add non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy the built mcp-server preserving directory structure
COPY --from=builder /build/packages/mcp-server/dist ./packages/mcp-server/dist
COPY --from=builder /build/packages/mcp-server/node_modules ./packages/mcp-server/node_modules

# Copy node_modules from root (pnpm hoists dependencies here)
COPY --from=builder /build/node_modules ./node_modules

# Copy the built @stainless-api/sdk into node_modules
COPY --from=builder /build/dist ./node_modules/@stainless-api/sdk

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# The MCP server uses stdio transport by default
# No exposed ports needed for stdio communication

# Set the entrypoint to the MCP server
ENTRYPOINT ["node", "packages/mcp-server/dist/index.js"]

# Allow passing arguments to the MCP server
CMD []
