import { auth } from "@/auth";
import { CartItemsType } from "../lib/type";
import { redirect } from "next/navigation";
import { getCartItems } from "../actions/actions";
import CartItemsConfirmed from "@/app/components/CartItemsConfirmed"

async function page() {

  const session = await auth();
  let productsCart: CartItemsType[] = []
  let count;
  let totalPrice: number = 0;

  if (!session || !session.user) {
    redirect("/no-access")
  } else {
    const sessionEmail: string | undefined | null = session.user.email;
    if (sessionEmail) {
      const cartItems = await getCartItems(sessionEmail);
      if (cartItems !== false){
        productsCart = cartItems
        count = productsCart.length
        if (count !== 0 ){
          const totalPricePerItem = productsCart.map((item)=> item.cartQuantity * item.product.price)
          totalPrice = (totalPricePerItem.reduce((a,b) => a+b))
        }
      } else {
        //show error page
      }
    }
  }
  return (
    <div>
      <CartItemsConfirmed items={productsCart} totalPrice={totalPrice}/>
    </div>
  )
}

export default page
