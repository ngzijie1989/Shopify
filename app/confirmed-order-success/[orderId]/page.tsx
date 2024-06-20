import Link from "next/link"
import styles from "@/app/lib/css/confirmedorderssuccess.module.css"
import { checkOrderId } from "@/app/actions/actions";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { orderId: string } }) {

  const { orderId } = params;

  const checkOrder = await checkOrderId(orderId)

  if (checkOrder === false){
    redirect("/not-authorized")
  }

  return (
    <div>
      <div className={`flex flex-col items-center justify-center ${styles.align}`}>
        <div className="w-4/5 my-4 flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-3xl">Your payment is successful!</h1>
          <p> Order ID is #{ orderId }</p>
        </div>
        <div>
          <Link href="/" className="btn btn-success me-3">Continue to shop</Link>
          <Link href="/confirmed-orders" className="btn btn-primary">Review your confirmed orders</Link>
        </div>
      </div>
    </div>
  )
}

export default Page