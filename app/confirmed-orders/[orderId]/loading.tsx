import styles from "@/app/lib/css/shimmer.module.css"

async function page() {


  return (
    <div className="w-full md:w-4/5 mx-auto mt-5 p-5">
      <h1 className={`${styles.shimmer} w-full h-12 mb-4`}></h1>
      <h1 className={`${styles.shimmer} w-full h-32 mb-3`}></h1>
      <h1 className={`${styles.shimmer} w-full h-32 mb-3`}></h1>
      <h1 className={`${styles.shimmer} w-full h-32 mb-3`}></h1>

    </div>
  )
}

export default page
