import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { getFavorites } from "../actions/actions";

async function page() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/no-access")
  } else {
    const sessionEmail: string | undefined | null = session.user.email;
    if (sessionEmail) {
      const favorites = await getFavorites(sessionEmail);
      if (favorites === false){
        //show error page
      }
    }
  }
  

  return (
    <div>
      Hello
    </div>
  )
}

export default page
