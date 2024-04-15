import { tasks } from "@/app/tasks/data/tasks"

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
   await prisma.task.createMany({
      data: tasks,
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });