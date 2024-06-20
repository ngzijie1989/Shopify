import Link from "next/link"

function NoOrders() {
  return (
    <div>
      <div className="w-3/5 mx-auto mt-5 text-center">
        <br></br><br></br><br></br><br></br><br></br>
        <p className="text-2xl"><em>Currently you have not ordered any items </em></p>
        <div className="mt-5">
          <Link href="/" className="btn btn-success">Continue to shop</Link>
        </div>
      </div>
    </div>
  )
}

export default NoOrders
