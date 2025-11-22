import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      adapter: {
        provider: "postgresql",
        url: process.env.DATABASE_URL,
      },
    },
  },
});

export default prisma;
