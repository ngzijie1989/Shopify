import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getConfirmedOrders } from "../actions/actions";
import ConfirmedOrders from "../components/ConfirmedOrders";
import { ConfirmedItemsType, ConfirmedAllOrderType } from "../lib/type";
import NoOrders from "../components/NoOrders";

async function page() {

  
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Add small delay so that can see shimmer haha
  await delay(500); // 5000 milliseconds = 5 seconds

  const session = await auth();
  let checkOrderStatus: string = ""
  let allOrders: ConfirmedAllOrderType[] = []

  if (!session || !session.user ) {
    redirect("/no-access")
  } else {
    const email: string = session.user.email!
    const confirmedOrder = await getConfirmedOrders(email)
    checkOrderStatus = confirmedOrder.status

    if (checkOrderStatus === "orders"){
      allOrders = confirmedOrder.data!
    }
  }

  return (
    <div>
      {checkOrderStatus === "orders" ? <ConfirmedOrders orders={allOrders} /> : <NoOrders/> }
    </div>
  )
}

export default page
