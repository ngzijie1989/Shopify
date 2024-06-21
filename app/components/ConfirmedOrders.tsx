import { ConfirmedOrderType } from "../lib/type"
import ConfirmedOrder from "./ConfirmedOrder"

function ConfirmedOrders({orders}: {orders: ConfirmedOrderType[]}) {

  return (
    <div className="p-5 w-full sm:w-4/5 mx-auto">
      <h1 className="font-bold text-3xl mb-4">All orders ({orders.length})</h1>
      {orders.map((order: ConfirmedOrderType)=>{
        return <ConfirmedOrder key={order.id} order={order} />
      })}
    </div>
  )
}

export default ConfirmedOrders
