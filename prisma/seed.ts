const { hash } = require("bcrypt");
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main (){

  const deleteFavorites = await prisma.favorite.deleteMany();
  const deletecartItem = await prisma.cartItem.deleteMany();
  const deletedProductInfo = await prisma.Product.deleteMany();
  const deletedUserInfo = await prisma.User.deleteMany();

  console.log("Deleted all CartItems")
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

  const product1 = await prisma.Product.create({
    data: {
      name: "Uniqlo Rabbit Shirt",
      price: 20.99,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459564/item/goods_61_459564.jpg?width=750",
      quantity: 20,
      description: "It’s time for action, in the name of world peace.” Major figures who share this vision with UNIQLO have volunteered to design T-shirts expressing their peaceful wishes. PEACE FOR ALL shares its vision of peace for those affected by violence, discrimination, armed conflict, and poverty. The Peace for All project is powered by each and every one of you who wears these T-shirts. Our wish is for a world in which all people can feel the peace of a future where everyone can live safely together. UNIQLO will continue to broaden this initiative, working with people all around the world." ,
      category: "TOP",
      gender: "UNISEX",
      user: {
        connect: { id: user1.id }
      }
    },
  });

  const product2 = await prisma.Product.create({
    data: {
      name: "Mick Straight-Leg Jeans",
      price: 49.90,
      imageLink: "https://www.mrporter.com/variants/images/1647597302039975/in/w560_q60.jpg",
      quantity: 13,
      description: "SAINT LAURENT's 'Mick' jeans are an enduring wardrobe staple. They're cut with a straight leg that's faded across the front for a vintage feel. Wear yours with everything from tees to shirts." ,
      category: "BOTTOM",
      gender: "MALE",
      user: {
        connect: { id: user2.id } 
      }
    },
  });

  const product3 = await prisma.Product.create({
    data: {
      name: "Paula's Ibiza Puzzle Fold Large Leather-Trimmed Striped Raffia Tote Bag",
      price: 159,
      imageLink: "https://www.mrporter.com/variants/images/1647597339426303/in/w560_q60.jpg",
      quantity: 2,
      description: "Loewe's 'Puzzle Fold' tote bag has a stylishly understated design that will work with all kinds of outfits. Made in collaboration with Paula’s Ibiza, it's been expertly crafted in Spain from raffia and is designed to fold completely flat for easy portability. Notice the brand's logo plaque on the top." ,
      category: "ACCESSORY",
      gender: "FEMALE",
      user: {
        connect: { id: user3.id } 
      }
    },
  });

  const product4 = await prisma.Product.create({
    data: {
      name: "Uniqlo Stretch Slim Fit Shorts",
      price: 29.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/457617/item/goods_32_457617.jpg?width=750",
      quantity: 10,
      description: "Stretch twill cotton fabric with a soft texture and an elegant look." ,
      category: "BOTTOM",
      gender: "FEMALE",
      user: {
        connect: { id: user4.id } 
      }
    },
  });

  const product5 = await prisma.Product.create({
    data: {
      name: "Uniqlo Big Square Sunglasses",
      price: 20.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466249/item/goods_37_466249.jpg?width=750",
      quantity: 12,
      description: "Stylish large frames flatter all face types" ,
      category: "ACCESSORY",
      gender: "UNISEX",
      user: {
        connect: { id: user5.id } 
      }
    },
  });

  const product6 = await prisma.Product.create({
    data: {
      name: "V Neck Sleeveless Flare Dress",
      price: 59.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/471424003/item/sggoods_68_471424003.jpg?width=750",
      quantity: 6,
      description: "features Marimekko’s world-renowned prints: Melooni (melon), Ruukku (pot) by Maija Isola, Lirinä (sound of gurgling water), Asema (station) by Pentti Rinta, along with Demeter by Katsuji Wakisaka and Galleria (gallery) by Vuokko Eskolin-Nurmesniemi." ,
      category: "DRESS",
      gender: "FEMALE",
      user: {
        connect: { id: user1.id } 
      }
    },
  });

  const product7 = await prisma.Product.create({
    data: {
      name: "Studio Ghibli Sweatshirt",
      price: 39.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465884/item/goods_55_465884.jpg?width=750",
      quantity: 15,
      description: "The design incorporates a wide variety of art featuring Ghibli's best-known works, as well as the work of Thai artist Kanyada. Through this collection, we hope that the brilliance and energy of Studio Ghibli reaches each and every one of you. Hey, Let’s Go!" ,
      category: "OUTERWEAR",
      gender: "UNISEX",
      user: {
        connect: { id: user2.id } 
      }
    },
  });

  const product8 = await prisma.Product.create({
    data: {
      name: "Canvas Slip On Shoes",
      price: 29.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467170/item/goods_11_467170.jpg?width=750",
      quantity: 8,
      description: "Herringbone pattern outsoles provide a non-slip grip. Cotton canvas uppers." ,
      category: "FOOTWEAR",
      gender: "FEMALE",
      user: {
        connect: { id: user3.id } 
      }
    },
  });

  const product9 = await prisma.Product.create({
    data: {
      name: "Uniqlo Miracle Air Pants",
      price: 59.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_69_462618.jpg?width=750",
      quantity: 17,
      description: "These high-performance pants are lightweight, stretchy, and quick-drying, thanks to the unique fabric jointly developed by Toray and UNIQLO" ,
      category: "BOTTOM",
      gender: "MALE",
      user: {
        connect: { id: user4.id } 
      }
    },
  });

  const product10 = await prisma.Product.create({
    data: {
      name: "Halter Neck Bra Sleeveless Top",
      price: 29.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/470939/item/sggoods_32_470939.jpg?width=750",
      quantity: 15,
      description: "Cotton rib fabric complements the gently fitted silhouette." ,
      category: "TOP",
      gender: "FEMALE",
      user: {
        connect: { id: user5.id } 
      }
    },
  });

  const product11 = await prisma.Product.create({
    data: {
      name: "NK Dry Short Pants",
      price: 59.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461837/item/goods_00_461837.jpg?width=750",
      quantity: 25,
      description: "Mesh sections for improved breathability." ,
      category: "BOTTOM",
      gender: "MALE",
      user: {
        connect: { id: user1.id } 
      }
    },
  });

  const product12 = await prisma.Product.create({
    data: {
      name: "Ultra Stretch AIRism Sleeveless Dress",
      price: 39.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466555/item/goods_12_466555.jpg?width=750",
      quantity: 16,
      description: "Ultra Stretch fabric with a sleek look using smooth 'AIRism' fabric with quick-drying DRY technology." ,
      category: "DRESS",
      gender: "FEMALE",
      user: {
        connect: { id: user2.id } 
      }
    },
  });

  const product13 = await prisma.Product.create({
    data: {
      name: "Ultra Stretch AIRism Sleeveless Dress",
      price: 39.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466555/item/goods_12_466555.jpg?width=750",
      quantity: 16,
      description: "Ultra Stretch fabric with a sleek look using smooth 'AIRism' fabric with quick-drying DRY technology." ,
      category: "DRESS",
      gender: "FEMALE",
      user: {
        connect: { id: user2.id } 
      }
    },
  });

  const product14 = await prisma.Product.create({
    data: {
      name: "Narrow Strap Sandals",
      price: 19.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464755/item/goods_01_464755.jpg?width=750",
      quantity: 13,
      description: "Soft, cushioned straps. Padded insoles for added cushioning." ,
      category: "FOOTWEAR",
      gender: "FEMALE",
      user: {
        connect: { id: user3.id } 
      }
    },
  });

  const product15 = await prisma.Product.create({
    data: {
      name: "UV Protection Compact Umbrella",
      price: 19.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433776/item/goods_51_433776.jpg?width=750",
      quantity: 48,
      description: "UV Protection (UPF40) blocks harmful sun rays. Umbrella rib length of 55cm." ,
      category: "ACCESSORY",
      gender: "UNISEX",
      user: {
        connect: { id: user4.id } 
      }
    },
  });

  const product16 = await prisma.Product.create({
    data: {
      name: "NK DRY-EX Short Sleeve Polo Shirt",
      price: 59.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461836/item/goods_00_461836.jpg?width=750",
      quantity: 20,
      description: "Quick-drying 'DRY-EX' functionality." ,
      category: "ACTIVEWEAR",
      gender: "MALE",
      user: {
        connect: { id: user5.id } 
      }
    },
  });

  const product17 = await prisma.Product.create({
    data: {
      name: "NK Dry Shorts",
      price: 39.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/461639/item/goods_08_461639.jpg?width=750",
      quantity: 35,
      description: "High-performance wear worn by top athletes with quick-drying DRY technology." ,
      category: "ACTIVEWEAR",
      gender: "MALE",
      user: {
        connect: { id: user1.id } 
      }
    },
  });

  const product18 = await prisma.Product.create({
    data: {
      name: "Nylon Jogger Pants",
      price: 49.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/467216/item/sggoods_03_467216.jpg?width=750",
      quantity: 20,
      description: "A modern capsule of versatile sportswear influenced by Roger Federer, designed by JW ANDERSON." ,
      category: "BOTTOM",
      gender: "MALE",
      user: {
        connect: { id: user2.id } 
      }
    },
  });

  const product19 = await prisma.Product.create({
    data: {
      name: "Cotton Belted Short Sleeve Dress",
      price: 29.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/465882/item/sggoods_56_465882.jpg?width=750",
      quantity: 31,
      description: "Lightweight and casual cotton poplin fabric" ,
      category: "DRESS",
      gender: "FEMALE",
      user: {
        connect: { id: user3.id } 
      }
    },
  });

  const product20 = await prisma.Product.create({
    data: {
      name: "Pocketable UV Protection Parka (Patterned)",
      price: 49.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/467410/item/goods_60_467410.jpg?width=750",
      quantity: 24,
      description: "Crisp and comfortable polyester fabric." ,
      category: "OUTERWEAR",
      gender: "FEMALE",
      user: {
        connect: { id: user4.id } 
      }
    },
  });

  const product21 = await prisma.Product.create({
    data: {
      name: "Relaxed Parka",
      price: 49.90,
      imageLink: "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/467119/item/sggoods_56_467119.jpg?width=750",
      quantity: 26,
      description: "Cotton-nylon fabric with an elegantly casual look." ,
      category: "OUTERWEAR",
      gender: "FEMALE",
      user: {
        connect: { id: user5.id } 
      }
    },
  });


  
  console.log("Created product1: ", product1);
  console.log("Created product2: ", product2);
  console.log("Created product3: ", product3);
  console.log("Created product4: ", product4);
  console.log("Created product5: ", product5);
  console.log("Created product6: ", product6);
  console.log("Created product7: ", product7);
  console.log("Created product8: ", product8);
  console.log("Created product9: ", product9);
  console.log("Created product10: ", product10);
  console.log("Created product11: ", product11);
  console.log("Created product12: ", product12);
  console.log("Created product13: ", product13);
  console.log("Created product14: ", product14);
  console.log("Created product15: ", product15);
  console.log("Created product16: ", product16);
  console.log("Created product17: ", product17);
  console.log("Created product18: ", product18);
  console.log("Created product19: ", product19);
  console.log("Created product20: ", product20);
  console.log("Created product20: ", product21);

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