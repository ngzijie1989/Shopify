import { MdOutlineSort } from "react-icons/md";

function SortBar({sort, setSort}: {sort: string; setSort: (value: any)=> void}) {

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  return (
    <div>
      <select
        onChange={handleSort}
        className="block w-full h-12 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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


