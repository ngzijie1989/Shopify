import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link"

function NavBar() {
  return (
  <div className="navbar bg-base-100 flex justify-between sticky top-0 z-40 bg-slate-100 mb-5">
    <div>
      <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    <div>
      <a href="/" className="btn btn-ghost text-xl">Shopify!!!</a>
    </div>
    <div>
      <button className="btn text-xl"><MdCurrencyExchange /></button>
      <Link href="/favorites" className="btn btn-ghost text-xl"><MdFavoriteBorder /></Link>
      <Link href="/cart" className="btn btn-ghost text-xl"><IoCartOutline /></Link>
      <Link href="/cart" className="btn btn-ghost text-xl"><FaRegUserCircle /></Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <div className="btn text-xl">
            <FaRegUserCircle />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar
