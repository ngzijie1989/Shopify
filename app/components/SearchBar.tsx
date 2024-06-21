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
        <input type="text" placeholder="Search for a product" className="input input-bordered w-48 sm:w-60 md:w-80" onChange={handleSearchProduct} />
      </div>
    )
  }

  export default SearchBar
