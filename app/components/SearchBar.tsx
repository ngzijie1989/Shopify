  "use client"
  import { useState } from "react"
  import { useDebouncedCallback } from "use-debounce";

  function SearchBar() {
    const [input, setInput] = useState<string>("")

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };
    
    const SearchRun = useDebouncedCallback(async() => {
      const response = await fetch(`/api/search-products?input=${input}`, options)
    },500)

    const handleSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.currentTarget.value)
      searchRun()

      //need to search for products. use API call with debounce
    }
    return (
      <div>
        <input type="text" placeholder="Search for a product" className="input input-bordered w-48 sm:w-60 md:w-80" onChange={handleSearchProduct} />
      </div>
    )
  }

  export default SearchBar
