/* eslint-disable @next/next/no-img-element */
"use client"

import styles from "@/app/lib/css/images.module.css"
import { useState } from "react"
import { MdCancel } from "react-icons/md";
import { deleteCartItem } from "../actions/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function CartItem({item, setTotal}: {item: any, setTotal: any}) { //not sure about the setTotal typescript
  const router = useRouter()

  const category = item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1).toLowerCase()
  const [ quantity, setQuantity ] = useState<number>(item.cartQuantity)
  const [ totalPrice, setTotalPrice ] = useState<number>(item.cartQuantity*item.product.price)

  const handleDecrementQuantity = () => {
    if (quantity >1 ){
      setQuantity((prev)=> prev -1)
      setTotalPrice((prevPrice) => {
        const newPrice = prevPrice - item.product.price;
        return parseFloat(newPrice.toFixed(2));
      });
      setTotal((prevPrice: number) => {
        const newPrice = prevPrice - item.product.price;
        return parseFloat(newPrice.toFixed(2));
      })
    }
  }

  const handleIncrementQuantity = () => {
    const maxQuantity = item.product.quantity + item.cartQuantity
    if (quantity < maxQuantity){
      setQuantity((prev)=> prev + 1)
      setTotalPrice((prevPrice) => {
        const newPrice = prevPrice + item.product.price;
        return parseFloat(newPrice.toFixed(2));
      });
      setTotal((prevPrice: number) => {
        const newPrice = prevPrice + item.product.price;
        return parseFloat(newPrice.toFixed(2));
      })
    }
  }

  const handleDeleteItem = async () => {
    const response = await deleteCartItem(item)
    if (response === true){
      toast.success("Item has been removed from your cart")
      router.refresh()
    }
  }

  return (
    <div className="relative">
      <div className="border p-4 flex items-center justify-between rounded-lg mb-4">
        <div className="flex">
          <img className={`me-3 ${styles.cartImage}`} src={item.product.imageLink} alt={item.product.name}/>
          <div className="w-60">
            <h1 className="font-bold">{item.product.name}</h1>
            <p>Unit Price: ${item.product.price}</p>
            <p>Category: {category}</p>
            <p>Gender: {item.product.gender}</p>
          </div>
        </div>

        <div className="flex items-center">
          <button className="btn text-3xl me-3" onClick={handleDecrementQuantity}> - </button> 
          {quantity}
          <button className="btn text-3xl ms-3" onClick={handleIncrementQuantity}> + </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2>Total</h2>
          <p className="font-bold">$<span className="font-bold">{totalPrice}</span></p>
        </div>
      </div>

      <div className="absolute top-3 right-3 text-xl">
        <button onClick={handleDeleteItem}><MdCancel /></button>
      </div>
    </div>
  )
}

export default CartItem
