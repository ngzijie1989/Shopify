import { auth } from "@/auth"
import { getUserProfile } from "../actions/actions"
import { redirect } from "next/navigation"
import { UserType } from "../lib/type"
import UserProfile from "../components/UserProfile"

async function page() {

  const session = await auth()
  let user: UserType | null;

  if (!session || session === null){
    redirect("/")
  } else {
    const userEmail = session.user?.email

    if (userEmail){
      user = await getUserProfile(userEmail)
    } else {
      redirect("/")
    }
  }
  

  return (
    <div>
        {user ? <UserProfile user={user}/> : ""}
    </div>
  )
}

export default page
