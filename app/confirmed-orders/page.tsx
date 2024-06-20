import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getConfirmedOrders } from "../actions/actions";
import ConfirmedOrders from "../components/ConfirmedOrderItems";
import { ConfirmedItemsType, ConfirmedOrderType } from "../lib/type";
import NoOrders from "../components/NoOrders";

async function page() {

  const session = await auth();
  let checkOrderStatus: string = ""
  let orders: ConfirmedOrderType[] = []

  if (!session || !session.user ) {
    redirect("/no-access")
  } else {
    const email: string = session.user.email!
    const confirmedOrder = await getConfirmedOrders(email)
    checkOrderStatus = confirmedOrder.status

    if (checkOrderStatus === "orders"){
      orders = confirmedOrder.data!
    }
  }

  return (
    <div>
      {checkOrderStatus === "orders" ? <ConfirmedOrders orders={orders} /> : <NoOrders/> }
    </div>
  )
}

export default page
