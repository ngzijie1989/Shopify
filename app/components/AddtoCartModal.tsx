type AddtoCartProps = {
  modal: boolean;
  setModal: (value: boolean) => void;
  quantity: number; 
  id: string
}

function AddtoCartModal({id, quantity, modal, setModal}: AddtoCartProps) {
  return (
    <div>
      <div className={`modal ${modal ? "modal-open" : "" }`}>
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        </div>
      </div>
    </div>
  )
}

export default AddtoCartModal
