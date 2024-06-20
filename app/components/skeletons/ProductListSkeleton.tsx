import styles from "@/app/lib/css/shimmer.module.css"

async function ProductListSkeleton() {

  return (
    <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto sm:grid-cols-3 md:grid-cols-4">
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
      <div className={`${styles.shimmer} h-96 rounded-lg`}></div>
    </div>
  )
}

export default ProductListSkeleton