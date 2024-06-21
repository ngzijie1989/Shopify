  "use client"
  import { useState } from "react"

  function SearchBar() {
    const [input, setInput] = useState<string>("")

    const handleSearchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.currentTarget.value)
      console.log(input)

      //need to search for products. use API call with debounce
    }
    return (
      <div>
        <input type="text" placeholder="Search for a product" className="input input-bordered w-48 sm:w-60 md:w-80" onChange={handleSearchProduct} />
      </div>
    )
  }

  export default SearchBar
