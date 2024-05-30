import { auth } from "@/auth";
import { CartItemsType } from "../lib/type";
import { redirect } from "next/navigation";
import { getCartItems } from "../actions/actions";
import CartItems from "@/app/components/CartItems"

async function page() {
  const session = await auth();
  let productsCart: any[] = [] //CartItemsType got issue
  let count;
  let totalPrice = 0;

  if (!session || !session.user) {
    redirect("/no-access")
  } else {
    const sessionEmail: string | undefined | null = session.user.email;
    if (sessionEmail) {
      const cartItems = await getCartItems(sessionEmail);
      if (cartItems !== false){
        productsCart = cartItems 
        count = productsCart.length
        const totalPricePerItem = productsCart.map((item)=> item.cartQuantity * item.product.price)
        totalPrice = totalPricePerItem.reduce((a,b) => a+b)
      } else {
        //show error page
      }
    }
  }
  return (
    <div className="w-3/5 mx-auto mt-5">
      <h1 className="font-bold mb-4 text-3xl">My Cart ({count})</h1>
      <div>
        <CartItems items={productsCart} totalPrice={totalPrice}/>
      </div>
    </div>
  )
}

export default page
