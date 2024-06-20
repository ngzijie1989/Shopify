import { ConfirmedItemsType } from "../lib/type"

function ConfirmedOrderItem({item}: {item: ConfirmedItemsType}) {
  console.log(item)
  return (
    <div>
          <div className="relative">
      <div className="border p-4 flex items-center justify-between rounded-lg mb-4 w-full">
        <div className="flex">
          {/* <img className={`me-3 ${styles.cartImage}`} src={item.product.imageLink} alt={item.product.name}/> */}
          <div className="w-60">
            {/* <h1 className="font-bold">{item.}</h1>
            <p>Unit Price: ${item.product.price}</p>
            <p>Category: {category}</p>
            <p>Gender: {item.product.gender}</p>
            <p>Quantity Ordered: {quantity}</p> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2>Total</h2>
          {/* <p className="font-bold">$<span className="font-bold">{totalPrice.toFixed(2)}</span></p> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ConfirmedOrderItem
