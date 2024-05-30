import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link"
import { auth } from "@/auth";
import SignOutComponent from "@/app/components/SignOutComponent"
import SignInComponent from "./SignInComponent";
import ProfileLink from "./ProfileLink";
import { getCartItems } from "../actions/actions";

async function NavBar() {
  const session: any | null  = await auth()
  const sessionEmail = session.user.email
  const cartItems = await getCartItems(sessionEmail)

  return (
  <div className="navbar bg-base-100 flex justify-between sticky top-0 z-40 bg-slate-100 h-16">
    <div>
      <a href="/" className="btn btn-ghost text-xl">Shopify!!!</a>
    </div>
    <div className="flex items-center">
      <button className="btn btn-ghost text-xl"><MdCurrencyExchange /></button>
      <Link href="/favorites" className="btn btn-ghost text-xl"><MdFavoriteBorder /></Link>
      <Link href="/cart" className="btn btn-ghost text-xl relative"><IoCartOutline /><span className="text-xs absolute top-0.5 right-1.5 bg-red-300 rounded-full py-0.5 px-1.5">{cartItems !== false && cartItems.length > 0 ? cartItems.length : ""}</span></Link>
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
