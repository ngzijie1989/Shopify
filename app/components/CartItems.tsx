"use client"

import { CartItemsType } from "../lib/type";
import CartItem from "./CartItem"
import { useState } from "react"

function CartItems({items, totalPrice}: {items: CartItemsType[]; totalPrice: number}) {
  const [total, setTotal] = useState<number>(totalPrice)

  console.log(items)

  return (
    <div>
      <div>
        {items.map((item: CartItemsType)=> <CartItem key={item.id} item={item} setTotal={setTotal}/>)}
      </div>

      <div className="border-t-[3px] mt-5 p-4 flex justify-between text-xl font-bold">
        <p>Total Purchase:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartItems
