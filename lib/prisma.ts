// Use the generated prisma client made via the dockerfile
import { PrismaClient } from '@prisma/client';

// Declare in global that 'prisma' is of type PrismaClient
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// Check if prisma already exists. If not, create it.
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

// If environment is not prod, cache the prisma client.
if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = prisma;
