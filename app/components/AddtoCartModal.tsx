import { AddtoCartModalProps } from "../lib/type"
import { AddToCart } from "../actions/actions"

function AddtoCartModal({name, id, quantity, modal, setModal}: AddtoCartModalProps) {

  const handleAddtoCart = async () => {
    const response = await AddToCart(id, quantity)
    //continue
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
