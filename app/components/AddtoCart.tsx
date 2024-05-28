'use client'

import { useState } from "react";
import Button from "./Button";
import AddtoCartModal from "./AddtoCartModal";
import Product from "./Product";

function AddtoCart({name, id, maxQuantity}: {id: string; maxQuantity: number; name: string}) {
  const [ quantity, setQuantity ] = useState<number>(1)
  const [ modal, setModal ] = useState<boolean>(false)

  const handleDecrementQuantity = () => {
    if (quantity >1 ){
      setQuantity((prev)=> prev -1)
    }
  }

  const handleIncrementQuantity = () => {
    if (quantity < maxQuantity){
      setQuantity((prev)=> prev + 1)
    }
  }

  return (
    <div>
      <div className="flex items-center">
        <button className="btn text-3xl me-3" onClick={handleDecrementQuantity}> - </button> 
        {quantity}
         <button className="btn text-3xl ms-3" onClick={handleIncrementQuantity}> + </button>
      </div>

      <div>
        <button onClick ={()=> setModal(true)} className="btn w-full bg-rose-600 text-white hover:text-black mt-5">Add to Cart</button>
      </div>

      <AddtoCartModal name={name} id={id} quantity={quantity} setModal={setModal} modal={modal} />
    </div>
  )
}

export default AddtoCart
