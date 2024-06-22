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
      console.log(user)
    } else {
      redirect("/")
    }
  }
  


  console.log(user)

  return (
    <div>
        {user ? <UserProfile user={user}/> : ""}
    </div>
  )
}

export default page
