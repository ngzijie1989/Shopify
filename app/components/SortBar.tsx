import { MdOutlineSort } from "react-icons/md";

function SortBar({sort, setSort}: {sort: string; setSort: (value: any)=> void}) {

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  return (
    <div>
      <select
        onChange={handleSort}
        className="flex items-center mr-auto justify-end w-40 sm:w-48 md:w-60 h-12 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort By</option>
        <option value="high">Price (High to Low)</option>
        <option value="low">Price (Low to High)</option>
        <option value="category">Category</option>
      </select>
    </div>
  )
}

export default SortBar


