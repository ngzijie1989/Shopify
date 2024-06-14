"use client"

import { CartItemsType } from "../lib/type";
import CartItemConfirmed from "./CartItemConfirmed"
import { useState } from "react"

function CartItemsConfirmed({items, totalPrice}: {items: CartItemsType[]; totalPrice: number}) {

  return (
    <div>
      <div>
        {items.map((item: CartItemsType)=> <CartItemConfirmed key={item.id} item={item}/>)}
      </div>

      <div className="border-t-[3px] mt-5 p-4 flex justify-between text-xl font-bold">
        <p>Total Purchase:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartItemsConfirmed
