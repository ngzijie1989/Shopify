import { ConfirmedItemsType } from "../lib/type"
import ConfirmedOrderItem from "./ConfirmedOrderItem"

function ConfirmedOrderItems({items}: {items: ConfirmedItemsType[]}) {
  console.log(items)
  // const orderId = items[0].ConfirmedOrderId

  return (
    <div>
      {/* <h1>Order: #{orderId}</h1> */}
      {items.map((item: ConfirmedItemsType)=> { return <ConfirmedOrderItem key={item.id} item={item} /> })}
    </div>
  )
}

export default ConfirmedOrderItems
