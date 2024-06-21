'use client'

import { CartItemsType } from "../lib/type"
import { useState } from "react"
import ConfirmModal from "./ConfirmModal"

function ConfirmOrder({productsCart}: {productsCart : CartItemsType[]}) {
  const [confirmModal, setConfirmModal] = useState<boolean>(false)

  const handleConfirmModal = () => {
    setConfirmModal(true)
  }
  
  return (
    <div>
      <button onClick={handleConfirmModal} className="btn btn-accent mb-4">Confirm Order</button>
      <ConfirmModal productsCart={productsCart} confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
    </div>
  )
}

export default ConfirmOrder
