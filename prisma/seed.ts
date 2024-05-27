const { hash } = require("bcrypt");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main (){

  const deletedUserInfo = await prisma.User.deleteMany();

  console.log("Deleted all users")

  const password1 = await hash("password1", 10)
  const user1 = await prisma.User.create({
    data: {
      name: 'Mabel',
      email: "usertest1@email.com",
      provider: "Credentials",
      password: password1,
      active: true
    },
  });

  const password2 = await hash("password2", 10)
  const user2 = await prisma.User.create({
    data: {
      name: 'Clement',
      email: "usertest2@email.com",
      provider: "Credentials",
      password: password2,
      active: true
    },
  });
  
  console.log("Created user1: ", user1);
  console.log("Created user2: ", user2);

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })