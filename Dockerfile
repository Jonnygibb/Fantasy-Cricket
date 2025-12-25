# ----------------------------------
# Base
# ----------------------------------
FROM node:24-alpine AS base
WORKDIR /app

# ----------------------------------
# Dependencies + Prisma generation
# ----------------------------------
FROM base AS deps

# Install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy Prisma schema & config
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate

# ----------------------------------
# Dev Stage
# ----------------------------------
FROM deps AS dev
WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ----------------------------------
# Build stage
# ----------------------------------
FROM base AS build
WORKDIR /app

# Bring everything needed
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/generated ./generated
COPY --from=deps /app/prisma ./prisma

# Copy app source
COPY . .

# Build Next.js
RUN npm run build

# ----------------------------------
# Production runtime
# ----------------------------------
FROM node:24-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Install prod deps only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy runtime artifacts
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./
COPY --from=build /app/generated ./generated
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
    