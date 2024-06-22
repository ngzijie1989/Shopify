"use client"

import SearchBar from "./SearchBar"
import ProductList from "./ProductList"
import { ProductType } from "../lib/type"
import { useState, useEffect } from "react"
import SortBar from "./SortBar"

function HomeClient({products, session, favProductsIds}: {products: ProductType[]; session: any; favProductsIds: string[]}) {
  const [input, setInput] = useState<string>("")
  const [sort, setSort] = useState<string>("")
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState<ProductType[]>(products);
  
  const filteredProducts = input === "" ? 
  products :products.filter(product =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  useEffect(() => {

    const filterAndSortProducts = () => {
      let filteredProducts = [...products];

      if (input !== "") {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(input.toLowerCase())
        );
      }


      if (sort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price); 
      } else if (sort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price); 
      } else if (sort === "category") {
        filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
      }

      setFilteredAndSortedProducts(filteredProducts);
    };

    filterAndSortProducts();
  }, [products, input, sort]);

  return (
    <div>
      <div className="w-full sm:w-11/12 mx-auto">
        <div className="flex justify-between mx-4 mt-6">
          <h1 className="font-bold text-2xl mt-4">Products</h1>
          <div className="flex">
            <SearchBar input={input} setInput={setInput} />
            <div className="flex items-center justify-center ms-2">
              <SortBar sort={sort} setSort={setSort}/>
            </div>
          </div>
        </div>
        {filteredAndSortedProducts.length > 0 ? <ProductList products={filteredAndSortedProducts} session={session} favProductsIds={favProductsIds} /> :
        <div className="flex justify-center w-full p-10"><p className="font-bold text-xl"><em>There are no items matching your search results. Please try again.</em></p></div>
        }
        
      </div>
    </div>
  )
}

export default HomeClient
