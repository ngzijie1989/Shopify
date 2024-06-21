"use client"

import SearchBar from "./SearchBar"
import ProductList from "./ProductList"
import { ProductType } from "../lib/type"
import { useState } from "react"
import SortBar from "./SortBar"

function HomeClient({products, session, favProductsIds}: {products: ProductType[]; session: any; favProductsIds: string[]}) {
  const [input, setInput] = useState<string>("")
  const [sort, setSort] = useState<string>("")
  
  const filteredProducts = input === "" ? 
  products :products.filter(product =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <div className="w-full sm:w-11/12 mx-auto">
        <div className="flex justify-between mx-4 mt-6">
          <h1 className="font-bold text-2xl mt-4">Products</h1>
          <div className="flex">
            <SearchBar input={input} setInput={setInput} />
            <div className="flex items-center justify-center ms-2">
              <SortBar />
            </div>
          </div>
        </div>
        <ProductList products={filteredProducts} session={session} favProductsIds={favProductsIds} />
      </div>
    </div>
  )
}

export default HomeClient
