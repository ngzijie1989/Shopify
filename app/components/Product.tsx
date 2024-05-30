/* eslint-disable @next/next/no-img-element */
import { ProductType } from "../lib/type"
import Link from "next/link"
import styles from "@/app/lib/css/images.module.css"
import AddFavorite from "./AddFavorite"


function Product({product, session}: {product: ProductType, session: any}) {


  return (
      <Link href={`/products/${product.id}`}>
      <div className="relative">
        <img src={product.imageLink ? product.imageLink : "/noImage.jpg" } alt={product.name} className={styles.productListImage}/>
        <h1 className="font-bold">{product.name}</h1>
        <p>${product.price}</p>
        <div className="absolute top-1 right-2">
          <AddFavorite id={product.id} session={session}/>
        </div>
      </div>
      </Link>
  )
}

export default Product
