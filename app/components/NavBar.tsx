import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle, FaRegListAlt } from "react-icons/fa";
import Link from "next/link"
import { auth } from "@/auth";
import SignOutComponent from "@/app/components/SignOutComponent"
import SignInComponent from "./SignInComponent";
import ProfileLink from "./ProfileLink";
import { getCartItems } from "../actions/actions";
import { SiAboutdotme } from "react-icons/si";
import { cookies } from "next/headers";
import { getServerCookie, setServerCookie } from "../lib/utils/cookie";

async function NavBar() {
  const cookieStore = cookies();
  let cartItems;
  let showToolTip = false;

  // async function setCook () {
  //   "use server"
  //   setServerCookie()
  // }

  // const check = await getServerCookie()
  // if (check === "not visited"){
  //   showToolTip = true
  //   console.log(showToolTip)
  //   setCook()
  // }

  const session: any | null  = await auth()

  if (session){
    const sessionEmail = session.user.email
    cartItems = await getCartItems(sessionEmail)
  }

  return (
  <div className="navbar bg-base-100 flex justify-between sticky top-0 z-40 bg-slate-100 h-16">
    <div>
      <a href="/" className="btn btn-ghost text-xl">Shopify!!!</a>
    </div>
    <div className="flex items-center">
      <Link href="/about" className="btn btn-ghost text-xl"><SiAboutdotme /></Link>
      <Link href="/favorites" className="btn btn-ghost text-xl"><MdFavoriteBorder /></Link>
      <Link href="/cart" className="btn btn-ghost text-xl relative"><IoCartOutline />{session && cartItems !== false && cartItems.length > 0 ? <span className="text-xs absolute top-0.5 right-1.5 bg-red-300 rounded-full py-0.5 px-1.5">{cartItems.length}</span> : ""}</Link>
      <Link href="/confirmed-orders" className="btn btn-ghost text-xl"><FaRegListAlt /></Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <div className="btn btn-ghost text-xl">
            <FaRegUserCircle />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {session ? <ProfileLink /> : ""}
          {session ? (<SignOutComponent />) : (<SignInComponent />)}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar
