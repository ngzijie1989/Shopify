import { AddtoCartModalProps } from "../lib/type"
import { AddToCart } from "@/app/actions/actions"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

function AddtoCartModal({name, id, quantity, modal, setModal, session}: AddtoCartModalProps) {

  const router = useRouter()
  let userEmail = ""
  
  if (session !== null){
    userEmail = session.user.email
  }

  const handleAddtoCart = async () => {
    const response = await AddToCart(id, quantity, userEmail)
    if (response === true) {
      setModal(false)
      router.push("/")
      router.refresh()
      toast.success("item has been added to cart")
    }
  }

  return (
    <div>
      <div className={`modal ${modal ? "modal-open" : "" }`}>
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>{setModal(false)}}>✕</label>
          <h3 className="text-lg font-bold">Are you certain you want to add this item into cart?</h3>
          <div className="mt-3">
            <p>Item: {name}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <button onClick={handleAddtoCart} className="btn mt-5 btn-success me-3">Add to Cart</button>
          <button onClick={()=>{setModal(false)}} className="btn mt-5">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddtoCartModal
