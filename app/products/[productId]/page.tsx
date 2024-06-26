/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/app/lib/type"
import { getProductInfo, checkUserAlreadyAdded } from "@/app/actions/actions"
import styles from "@/app/lib/css/images.module.css"
import AddtoCart from "@/app/components/AddtoCart"
import { auth } from "@/auth"

async function Page({params}: {params : { productId: string }}) { //use params to get the productID out

  const productId : string = params.productId
  const product: ProductType | null = await getProductInfo(productId)
  let checkUserAlreadyAddedItem: string | boolean = ""
  
  const session: any | null  = await auth()
  if (session !== null){
  const sessionEmail: string = session.user.email
  checkUserAlreadyAddedItem = await checkUserAlreadyAdded(productId, sessionEmail)
  }

  if (product === null){
    return <div>Product not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto mt-5">
      <div className="flex w-full flex-col sm:flex-row">
        <div className="w-full sm:w-2/5">
          <img src={product.imageLink ? product.imageLink : "/noImage.jpg"} className={`${styles.productImage}`} alt={product.name}/>
        </div>

        <div className="sm:ms-5 sm:w-3/5 flex flex-col w-full mt-3 sm:mt-0">
          <div className="flex-1 text-center sm:text-left">
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
            <AddtoCart id={product.id} maxQuantity={product.quantity} name={product.name} price={product.price} session={session} checkUserAlreadyAddedItem={checkUserAlreadyAddedItem}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
