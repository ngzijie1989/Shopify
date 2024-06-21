import { ConfirmedItemsType, ConfirmedOrderType } from "../lib/type"
import ConfirmedOrderItem from "./ConfirmedOrderItem"
import Link from "next/link"

function ConfirmedOrder({order}: {order : ConfirmedOrderType}) {
  const items: ConfirmedItemsType[] = order.confirmedItems

  return (
    <div>
      <div className="p-6 border flex justify-between mb-3 flex-col sm:flex-row ">
        <div className="text-xs md:text-base">
          <h1>Order ID: <span className="font-bold">#{order.id}</span></h1>
          <p>Total Price Paid: <span className="font-bold">${order.totalPrice}</span></p>
          <p>Payment Method: <span className="font-bold">{order.paymentMethod}</span></p>
          <p>Delivery Status: <span className="font-bold">{order.DeliverStatus}</span></p>
        </div>

        <div className="text-xs md:text-base">
          <Link href={`/confirmed-orders/${order.id}`} className="text-blue-500 underline hover:text-blue-700">Click to view details</Link>
        </div>
    </div>
  </div>
  )
}

export default ConfirmedOrder
