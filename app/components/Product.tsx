/* eslint-disable @next/next/no-img-element */
import { ProductType } from "../lib/type"
import Image from "next/image"
import Link from "next/link"
import styles from "@/app/lib/css/images.module.css"

function Product({product}: {product: ProductType}) {
  return (
      <Link href={`/products/${product.id}`}>
      <div className="">
        <img src={product.imageLink ? product.imageLink : "/noImage.jpg" } alt={product.name} className={styles.productListImage}/>
        <h1 className="font-bold">{product.name}</h1>
        <p>${product.price}</p>
      </div>
      </Link>
  )
}

export default Product
