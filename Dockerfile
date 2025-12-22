# Base Image
FROM node:25-alpine AS base
WORKDIR /app

# Dependencies Stage
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install
# Copy the prisma schema and generate the client
COPY prisma .prisma
RUN npx prisma generate

# Dev Stage - Allows for refreshing of web interface
FROM deps AS dev
WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Builder Stage
FROM deps AS builder
WORKDIR /app
COPY . .
RUN npm run build

# Production Runtime Stage
FROM node:25-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Install only production deps
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy Prisma schema and generate client again
COPY prisma ./prisma
RUN npx prisma generate

# Copy built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "start"]
