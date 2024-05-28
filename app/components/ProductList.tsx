import { ProductType } from "../lib/type"
import Product from "./Product"

function ProductList({products}: {products: ProductType[]}) {
  return (
    <div className="grid grid-cols-4 gap-6 w-4/5 mx-auto">
        {products.map((product)=>{
        return <Product key={product.id} product={product} />
      })}
    </div>
  )
}

export default ProductList
