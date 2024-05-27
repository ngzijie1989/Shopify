const { hash } = require("bcrypt");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main (){

  const deletedProductInfo = await prisma.Product.deleteMany();
  const deletedUserInfo = await prisma.User.deleteMany();

  console.log("Deleted all products")
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

  const password3 = await hash("password3", 10)
  const user3 = await prisma.User.create({
    data: {
      name: 'Melvin',
      email: "usertest3@email.com",
      provider: "Credentials",
      password: password3,
      active: true
    },
  });

  const password4 = await hash("password4", 10)
  const user4 = await prisma.User.create({
    data: {
      name: 'Limzy',
      email: "usertest4@email.com",
      provider: "Credentials",
      password: password4,
      active: true
    },
  });

  const password5 = await hash("password5", 10)
  const user5 = await prisma.User.create({
    data: {
      name: 'Kelvin Yap',
      email: "usertest5@email.com",
      provider: "Credentials",
      password: password4,
      active: true
    },
  });

  console.log("Created user1: ", user1);
  console.log("Created user2: ", user2);
  console.log("Created user3: ", user3);
  console.log("Created user4: ", user4);
  console.log("Created user5: ", user5);

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