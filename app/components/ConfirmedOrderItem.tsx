/* eslint-disable @next/next/no-img-element */
import { ConfirmedItemsType } from "../lib/type"
import styles from "@/app/lib/css/images.module.css"

function ConfirmedOrderItem({item}: {item: ConfirmedItemsType}) {

  return (
    <div className="border p-3 m-3 flex">
      <img className={`${styles.cartImage} me-3`} src={item.product?.imageLink} alt={item.product.name} />
      <div>
        <p>Product: <span className="font-bold">{item.product.name}</span></p>
        <p>Quantity: <span className="font-bold">{item.Quantity}</span></p>
        <p>Unit Price: <span className="font-bold">${item.BoughtPrice}</span></p>
        <p>Total: <span className="font-bold">${item.BoughtPrice*item.Quantity}</span></p>
      </div>
    </div>
  )
}

export default ConfirmedOrderItem
