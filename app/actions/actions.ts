'use server' //important

import prisma from "../lib/prisma"

export const getAllProducts = async  () => {
  try {
    const products = await prisma.product.findMany();

    return products;

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductInfo = async  (productId : string) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: productId
      }
    });

    return product;
    
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const AddToCart = async  (id : string, quantity: number) => {
  try {
    const cartItem = await prisma.cartItem.create({
      data: {
        cartQuantity: quantity,
        status: "PENDING",
        productId : id
        //need to add the userId. not added yet
      }
    });
    
    const updateProductList = await prisma.product.update({
      where: {
        id: id
      }, data :{
        quantity: {
          decrement: quantity
        }
      }
    })

    return true;
    
  } catch (error) {
    console.error("Error posting to cart:", error);
    return false
  }
};

export const AddToFavorites = async  (id : string) => {
  try {
    const favorited = await prisma.favorite.create({
      data: {
        //not done
      }
    });

    return true;
    
  } catch (error) {
    console.error("Cannot add to favorites:", error);
    return false
  }
};


