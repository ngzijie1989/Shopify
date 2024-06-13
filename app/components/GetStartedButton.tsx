'use client'
import { useRouter } from "next/navigation"

function GetStartedButton() {

  const router = useRouter()

  const handleReroute = () => {
    router.push("/")
  }

  return (
    <div>
      <button onClick={handleReroute} className="btn btn-primary">Get Started</button>
    </div>
  )
}

export default GetStartedButton
