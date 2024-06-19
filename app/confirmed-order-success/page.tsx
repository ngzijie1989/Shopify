import Link from "next/link"
import styles from "@/app/lib/css/confirmedorderssuccess.module.css"

function page() {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center ${styles.align}`}>
        <h1 className="w-4/5 text-center font-bold my-4 text-3xl">Your payment is successful!</h1>
        <div>
          <Link href="/" className="btn btn-success me-3">Continue to shop</Link>
          <Link href="/confirmed-orders" className="btn btn-primary">Review your confirmed orders</Link>
        </div>
      </div>
    </div>
  )
}

export default page
