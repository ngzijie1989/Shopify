import { Router } from "next/router"
import { CartItemsType } from "../lib/type"
import { useRouter } from "next/navigation"

function ConfirmModal({productsCart, confirmModal, setConfirmModal} : {productsCart : CartItemsType[], confirmModal : Boolean, setConfirmModal: (value: boolean) => void}) {
  const handleCloseConfirmModal = () => {
    setConfirmModal(false)
  }
  const router = useRouter()

  const HandleProceedOrder = () => {
    router.push("/confirm-order-details")
  }
  
  return (
      <div className={`modal ${confirmModal ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleCloseConfirmModal}>✕</label>
        <h3 className="text-lg font-bold">Are you sure you want to confirm the order?</h3>
        <div className="mt-3">
          <button onClick={HandleProceedOrder} className="btn btn-primary me-4 ">Yes</button>
          <button onClick={handleCloseConfirmModal} className="btn btn-neutral">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
