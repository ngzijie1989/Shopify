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

export const AddToCart = async  (id : string, quantity: number, email: string) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    const cartItem = await prisma.cartItem.create({
      data: {
        cartQuantity: quantity,
        status: "PENDING",
        productId : id,
        userId: user.id //wont be null //error already handled
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

export const AddToFavorites = async  (id : string, session : any) => {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email
      }
    })

    const findFavorite = await prisma.favorite.findFirst({
      where: {
        userId: user?.id,
        productId: id
      }
    })

    if (findFavorite){
      const deleteFavorite = await prisma.favorite.delete({
        where: {
          id: findFavorite.id
        }
      });

      console.log("deleted")
      return "deleted"
    } else {
      const favorited = await prisma.favorite.create({
        data: {
          userId: user?.id,
          productId: id
        }
      });
      return "added"
      console.log("Added")
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

    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: user.id
      }, 
      include : {
        product : true
      }
    });

    return cartItems;
    
  } catch (error) {
    console.error("Cannot get favorites:", error);
    return false
  }
};

