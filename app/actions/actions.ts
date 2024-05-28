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
      }
    });

    return cartItem;
    
  } catch (error) {
    console.error("Error posting to cart:", error);
    throw error;
  }
};
