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
      <div className="border p-4 flex rounded-lg mb-4 w-full">
        <div>
          <img className={`me-3 w-16 sm:w-20 md:w-24 ${styles.cartImageConfirmed}`} src={item.product.imageLink} alt={item.product.name}/>
        </div>
        <div className="flex">
          <div className="w-full ms-3 text-sm sm:text-sm md:text-base flex flex-col justify-center">
            <h1 className="font-bold">{item.product.name}</h1>
            <p>Unit Price: ${item.product.price}</p>
            <p>Category: {category}</p>
            <p>Gender: {item.product.gender}</p>
            <p>Quantity Ordered: {quantity}</p>
            <p className="font-bold">Total:<span className="font-bold"> ${totalPrice.toFixed(2)}</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItemConfirmed