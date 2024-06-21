import { MdOutlineSort } from "react-icons/md";

function SortBar({sort, setSort}: {sort: string; setSort: (value:string)=> void}) {

  const handleSort = (value: string) => {
    setSort(value)
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1"><MdOutlineSort /></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80">
        <li><a onClick={()=>handleSort("high")}><div className="flex justify-between"><span>{sort === "high" ? "✓" : ""}</span> <p>Highest to Lowest Price</p></div></a></li>
        <li><a onClick={()=>handleSort("low")}>{sort === "low" ? "✓" : ""}Lowest to Highest Price</a></li>
        <li><a onClick={()=>handleSort("category")}> {sort === "category" ? "✓" : ""}Category</a></li>
      </ul>
    </div>
  )
}

export default SortBar


