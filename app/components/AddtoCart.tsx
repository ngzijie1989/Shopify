'use client'

import { useState } from "react";
import Button from "./Button";
import AddtoCartModal from "./AddtoCartModal";
import Product from "./Product";
import { useRouter } from "next/navigation";

function AddtoCart({price, name, id, maxQuantity,session}: {id: string; maxQuantity: number; name: string; price: number; session: any}) {
  const [ quantity, setQuantity ] = useState<number>(1)
  const [ modal, setModal ] = useState<boolean>(false)
  const [ totalPrice, setTotalPrice ] = useState<number>(price)

  const router = useRouter()

  const handleDecrementQuantity = () => {
    if (quantity >1 ){
      setQuantity((prev)=> prev -1)
      setTotalPrice((prevPrice) => {
        const newPrice = prevPrice - price;
        return parseFloat(newPrice.toFixed(2));
      });
    }
  }

  const handleIncrementQuantity = () => {
    if (quantity < maxQuantity){
      setQuantity((prev)=> prev + 1)
      setTotalPrice((prevPrice) => {
        const newPrice = prevPrice + price;
        return parseFloat(newPrice.toFixed(2));
      });
    }
  }

  const handleAddToCart = () => {
    if (session) {
      setModal(true)
    } else {
      router.push("/no-access")
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="btn text-3xl me-3" onClick={handleDecrementQuantity}> - </button> 
          {quantity}
          <button className="btn text-3xl ms-3" onClick={handleIncrementQuantity}> + </button>
        </div>

        <div>
          <p>Total: <span className="font-bold">${totalPrice}</span></p>
        </div>
      </div>

      <div>
        <button onClick ={handleAddToCart} className="btn w-full bg-rose-600 text-white hover:text-black mt-5">Add to Cart</button>
      </div>

      <AddtoCartModal name={name} id={id} quantity={quantity} setModal={setModal} modal={modal} session={session} />
    </div>
  )
}

export default AddtoCart
