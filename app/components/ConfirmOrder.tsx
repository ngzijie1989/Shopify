'use client'

import { CartItemsType } from "../lib/type"
import { useState } from "react"

function ConfirmOrder({productsCart}: {productsCart : CartItemsType[]}) {
  const {confirmModal, setConfirmModal} = useState<boolean>(false)

  const handleConfirmModal = () => {
    setConfirmModal(true)
  }
  
  return (
    <div>
      <button onClick={handleConfirmModal} className="btn btn-accent mb-4">Confirm and place order</button>
    </div>
  )
}

export default ConfirmOrder
