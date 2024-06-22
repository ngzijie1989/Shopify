import { UserType } from "../lib/type"
import styles from "@/app/lib/css/login.module.css"

function UserProfile({user}: {user: UserType}) {

  return (
    <div className={`${styles.profileContainer}`}>
      <div className="w-2/5 mx-auto my-5 text-center bg-slate-300 rounded-lg p-3">
        <h1 className="font-bold text-xl sm:text-2xl">Your Profile</h1>
        <p className="text-xs sm:text-sm md:text-base">Email: {user.email}</p>
        <p className="text-xs sm:text-sm md:text-base">Name: {user.name}</p>
      </div>
    </div>
  )
}

export default UserProfile
