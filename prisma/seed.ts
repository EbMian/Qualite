import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient();
async function main() {
  for (let i = 0; i < 10; i++) {
    await prima.user.create({
      data: {
        email: `production-${i}@mail.net`,
        firstName: `production_${i}`,
        lastName: `PRODUCTION_${i}`,
      },
    });
  }
}

main().then(() => process.exit(0))