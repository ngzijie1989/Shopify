import { MdOutlineSort } from "react-icons/md";

function SortBar() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1"><MdOutlineSort /></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Highest to Lowest Price</a></li>
        <li><a>Lowest to Highest Price</a></li>
        <li><a>Category</a></li>
      </ul>
    </div>
  )
}

export default SortBar


