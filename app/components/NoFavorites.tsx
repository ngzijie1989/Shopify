import Link from "next/link"

function NoFavorites() {
  return (
    <div>
      <div className="w-3/5 mx-auto mt-5 text-center">
        <br></br><br></br><br></br><br></br><br></br>
        <p className="text-2xl"><em>You do not have any favorites yet.</em></p>
        <div className="mt-5">
          <Link href="/" className="btn btn-success">Continue to shop</Link>
        </div>
      </div>
    </div>
  )
}

export default NoFavorites
