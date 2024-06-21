import styles from "@/app/lib/css/shimmer.module.css"

async function page() {

  return (
    <div className="w-11/12 sm:w-4/5 mx-auto mt-4 m-3">
      <h1 className={`${styles.shimmer} w-1/5 h-12 mb-4`}></h1>

      <h1 className={`${styles.shimmer} h-36 mb-4`}></h1>

      <h1 className={`${styles.shimmer} h-36 mb-4`}></h1>

      <h1 className={`${styles.shimmer} h-36 mb-4`}></h1>
    </div>
  )
}

export default page
