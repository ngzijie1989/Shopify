import { auth } from "@/auth"
import { redirect } from "next/navigation"
import GetStartedButton from "../components/GetStartedButton"

async function page() {
  const session: any | null = await auth()

  if (session === null){
    redirect("/")
  }

  return (
    <div className="hero min-h-screen" style={{backgroundImage: "url('/landing.jpg')"}}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-5xl font-bold">Hello there, {session.user.name}!</h1>
          <p className="mb-5">Elevate Your Style, Embrace Your Passion</p>
          <GetStartedButton />
        </div>
      </div>
    </div>
  )
}

export default page
