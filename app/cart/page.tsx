import { auth } from "@/auth";
import { CartItemsType } from "../lib/type";
import { redirect } from "next/navigation";
import { getCartItems } from "../actions/actions";
import CartItems from "@/app/components/CartItems"
import Link from "next/link";
import ConfirmOrder from "../components/ConfirmOrder";

async function page() {
  const session = await auth();
  let productsCart: CartItemsType[] = []
  let count;
  let totalPrice: number = 0;

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Add small delay so that can see shimmer haha
  await delay(500); // 5000 milliseconds = 5 seconds

  if (!session || !session.user) {
    redirect("/no-access")
  } else {
    const sessionEmail: string= session.user.email!;
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
      {count !== 0 ? 
      <div className="w-full mx-auto mt-5 sm:w-4/5 p-2">
        <div className="flex justify-between">
        <div>
        <h1 className="font-bold text-xl sm:text-3xl flex items-center">My Cart ({count})</h1>
        </div>

        <div>
        <ConfirmOrder productsCart={productsCart}/>
        </div>
        </div>
        <div>
          <CartItems items={productsCart} totalPrice={totalPrice}/>
        </div>
      </div> : 
      <div className="w-3/5 mx-auto mt-5 text-center">
        <br></br><br></br><br></br><br></br><br></br>
        <p className="text-2xl"><em>Currently you do have any items in cart</em></p>
        <div className="mt-5">
          <Link href="/" className="btn btn-success">Continue to shop</Link>
        </div>
      </div>}
    </div>

  )
}

export default page
