import { ProductType } from "../lib/type"
import Product from "./Product"


async function ProductList({products, session, favProductsIds}: {products: ProductType[], session: any, favProductsIds: string[]}) {

  return (
    <div className="grid grid-cols-4 gap-6 w-4/5 mx-auto">
        {products.map((product)=>{
        return <Product key={product.id} product={product} session={session} favProductsIds={favProductsIds} />
      })}
    </div>
  )
}

export default ProductList
