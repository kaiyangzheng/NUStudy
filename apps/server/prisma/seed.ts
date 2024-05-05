import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const hashRounds = Number(process.env.HASH_ROUNDS) || 10;

async function main() {
  const rootPass = await bcrypt.hash('root-password', hashRounds);

  const rootUser = await prisma.user.upsert({
    where: { email: 'root@root.com' },
    update: {
      password: rootPass,
    },
    create: {
      email: 'root@root.com',
      password: rootPass,
      name: 'root',
    },
  });

  console.log({ rootUser });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
