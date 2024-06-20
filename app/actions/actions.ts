'use server' //important to run server side actions

import prisma from "../lib/prisma"
import { CartItemsType } from "../lib/type";

function isValidCartItem(item: any): item is CartItemsType {
  return item.product !== null && item.productId !== null;
}

export const getAllProducts = async  () => {
  try {
    const products = await prisma.product.findMany();

    const filterProducts = await products.filter((product)=>{
      return product.quantity !== 0
    })

    return filterProducts;

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

export const AddToCart = async  (id : string, quantity: number, email: string) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${email}`);
    } //need this error handling or typescript will show a message at user.id that user may be possibly null. This is when user of email may not be found

    const cartItem = await prisma.cartItem.create({
      data: {
        cartQuantity: quantity,
        status: "PENDING",
        productId : id,
        userId: user.id 
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

export const AddToFavorites = async  (id : string, session : any) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${session.user.email}`);
    } //need this error handling or typescript will show a message at user.id that user may be possibly null. This is when user of email may not be found

    const findFavorite = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        productId: id
      }
    })

    if (findFavorite){
      const deleteFavorite = await prisma.favorite.delete({
        where: {
          id: findFavorite.id
        }
      });

      return "deleted"
    } else {
      const favorited = await prisma.favorite.create({
        data: {
          userId: user.id,
          productId: id
        }
      });
      return "added"
    }
    
  } catch (error) {
    console.error("Error: ", error);
    return false
  }
};

export const getFavorites = async  (sessionEmail : string) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: sessionEmail
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${sessionEmail}`);
    }

    const getFavorites = await prisma.favorite.findMany({
      where: {
        userId: user.id
      }
    });

    return getFavorites;
    
  } catch (error) {
    console.error("Cannot get favorites:", error);
    return false
  }
};

export const getFavoritesAll = async  (sessionEmail : string) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: sessionEmail
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${sessionEmail}`);
    } //need this error handling or typescript will show a message at user.id that user may be possibly null. This is when user of email may not be found

    const FavoritesAll = await prisma.favorite.findMany({
      where: {
        userId: user.id
      }, 
      include : {
        product : true
      }
    });

    const productsFavorited = FavoritesAll.map((fav)=>fav.product)

    return productsFavorited;
    
  } catch (error) {
    console.error("Cannot get favorites:", error);
    return false
  }
};

export const getCartItems = async  (sessionEmail : string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: sessionEmail
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${sessionEmail}`);
    } //need this error handling or typescript will show a message at user.id that user may be possibly null. This is when user of email may not be found

    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: user.id,
        status: "PENDING"
      }, 
      include : {
        product : true
      }
    });

    const validCartItems = cartItems.filter(isValidCartItem);

    return validCartItems;
    
  } catch (error) {
    console.error("Cannot get favorites:", error);
    return false
  }
};

export const deleteCartItem = async  (item: any) => {
  try {

    await prisma.cartItem.delete({
      where: {
        id: item.id
      }
    })

    await prisma.product.update({
      where: {
        id: item.product.id
      },
      data: {
        quantity: {
          increment: item.cartQuantity
        }
      }
    });

    return true;
    
  } catch (error) {
    console.error("Error posting to cart:", error);
    return false
  }
};

export const updateCart = async  (item: any, quantity: number) => {
  try {

    const cartItem = await prisma.cartItem.update({
      where: {
        id: item.id
      },
      data: {
        cartQuantity: quantity
      }
    });

    let incremental;

  if (quantity > item.cartQuantity) {
    incremental = item.cartQuantity - quantity; // Replace with your logic to calculate the new quantity
  } else {
    incremental = quantity - item.cartQuantity // Replace with the alternative value
  }
    
    const updateProductList = await prisma.product.update({
      where: {
        id: item.product.id
      }, data :{
        quantity: {
          increment: incremental
        }
      }
    })

    return true;
    
  } catch (error) {
    console.error("Error posting to cart:", error);
    return false
  }
};

export const checkUserAlreadyAdded = async  (productId: string, sessionEmail : string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: sessionEmail
      }
    })

    if (!user) {
      throw new Error(`No user found with email: ${sessionEmail}`);
    } //need this error handling or typescript will show a message at user.id that user may be possibly null. This is when user of email may not be found

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        userId: user.id,
        productId: productId
      }
    });

    if (cartItem !== null){
      return "added"
    } else {
      return "not added"
    }
    
  } catch (error) {
    console.error("Cannot get favorites:", error);
    return "error"
  }
};

function isValidObjectId(id: string): boolean {
  const hexRegExp = /^[0-9a-fA-F]{24}$/;
  return hexRegExp.test(id);
}

export const checkOrderId = async  (orderId: string) => {
  try {

    if (!isValidObjectId(orderId)){
      return false
    } else {
        const check = await prisma.confirmedOrder.findFirst({
          where: {
            id: orderId
          }
        })
    
        if (check){
          return true
        } else {
          return false
        }
    }


  } catch (error) {
    console.error("Error checking ID:", error);
    throw error;
  }
};


