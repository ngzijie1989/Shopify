/* eslint-disable @next/next/no-img-element */
"use client"

import styles from "@/app/lib/css/images.module.css"
import { useState } from "react"
import { MdCancel } from "react-icons/md";
import { deleteCartItem, updateCart } from "../actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CartItemsType } from "../lib/type";

function CartItemConfirmed({item}: {item: CartItemsType}) { //not sure about the setTotal typescript
  const router = useRouter()

  const category = item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1).toLowerCase()
  const [ quantity, setQuantity ] = useState<number>(item.cartQuantity)
  const [ totalPrice, setTotalPrice ] = useState<number>(item.cartQuantity*item.product.price)

  return (
    <div className="relative">
      <div className="border p-4 flex items-center justify-between rounded-lg mb-4 w-full">
        <div className="flex">
          <img className={`me-3 ${styles.cartImage}`} src={item.product.imageLink} alt={item.product.name}/>
          <div className="w-60">
            <h1 className="font-bold">{item.product.name}</h1>
            <p>Unit Price: ${item.product.price}</p>
            <p>Category: {category}</p>
            <p>Gender: {item.product.gender}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            {quantity}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2>Total</h2>
          <p className="font-bold">$<span className="font-bold">{totalPrice.toFixed(2)}</span></p>
        </div>
      </div>
    </div>
  )
}

export default CartItemConfirmed