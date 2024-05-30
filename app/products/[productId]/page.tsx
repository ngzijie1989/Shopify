/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/app/lib/type"
import { getProductInfo } from "@/app/actions/actions"
import styles from "@/app/lib/css/images.module.css"
import AddtoCart from "@/app/components/AddtoCart"
import { auth } from "@/auth"

async function Page({params}: {params : { productId: string }}) {
  const productId : string = params.productId
  const product: ProductType | null = await getProductInfo(productId)

  const session: any | null  = await auth()

  if (product === null){
    return <div>Product not found</div>;
  }

  return (

    <div className="w-4/5 mx-auto">
      <div className="flex w-full">
        <div className="w-2/5">
          <img src={product.imageLink ? product.imageLink : "/noImage.jpg"} className={styles.productImage} alt={product.name}/>
        </div>

        <div className="ms-5 w-3/5 flex flex-col">
          <div className="flex-1">
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <br></br>
            <h2 className="font-bold">Description</h2>
            <p>{product.description}</p>
            <br></br>
            <h2 className="font-bold">Category</h2>
            <p>{product.category}</p>
            <br></br>
            <h2 className="font-bold">Price</h2>
            <p>S${product.price}</p>
            <br></br>
            <h2 className="font-bold">Quantity Available</h2>
            <p>{product.quantity}</p>
          </div> 

          <div>
            <AddtoCart id={product.id} maxQuantity={product.quantity} name={product.name} price={product.price} session={session}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
