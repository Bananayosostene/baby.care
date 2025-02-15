// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const adminPassword = await hashPassword("Test@12345");
    const admin = await prisma.user.upsert({
      where: { email: "babycare@dev.com" },
      update: {},
      create: {
        email: "babycare@dev.com",
        username: "admin",
        password: adminPassword,
        role: "admin",
        status: "active",
      },
    });
  } catch (error) {
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
