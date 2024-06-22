  "use client"
  import { useState } from "react"
  import { useDebouncedCallback } from "use-debounce";

  function SearchBar({input, setInput}: {input: string; setInput: (value: string)=> void}) {

    const searchRun = useDebouncedCallback((value: string) => {
      setInput(value);
    }, 500);

    const handleSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      searchRun(value)
    }

    return (
      <div>
        <input type="text" placeholder="Search for a product" className="input input-bordered w-40 sm:w-72 md:w-96 focus:ring-2 focus:ring-blue-500" onChange={handleSearchProduct} />
      </div>
    )
  }

  export default SearchBar
