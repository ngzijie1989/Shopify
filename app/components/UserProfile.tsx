import { UserType } from "../lib/type"

function UserProfile({user}: {user: UserType}) {

  return (
    <div className="w-2/5 mx-auto my-5 text-center bg-slate-300 rounded p-3">
      <h1 className="font-bold text-xl sm:text-2xl">Your Profile</h1>
      <p className="text-xs sm:text-sm md:text-base">Email: {user.email}</p>
      <p className="text-xs sm:text-sm md:text-base">Name: {user.name}</p>
    </div>
  )
}

export default UserProfile
