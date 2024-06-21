import styles from "@/app/lib/css/shimmer.module.css"

async function page() {

  return (
    <div className="flex mt-4 w-5/6 mx-auto sm:flex-row flex-col">
      <div className="me-5 sm:w-1/2 w-full ">
        <h1 className={`${styles.shimmer} w-full h-12 mb-4`}></h1>
        <h1 className={`${styles.shimmer} w-full h-40 mb-4`}></h1>
        <h1 className={`${styles.shimmer} w-2/5 h-12 mb-4`}></h1>
      </div>

      <div className="sm:w-1/2 w-full ">
        <h1 className={`${styles.shimmer} w-full h-12 mb-4`}></h1>
        <h1 className={`${styles.shimmer} w-full h-40 mb-4`}></h1>
        <h1 className={`${styles.shimmer} w-full h-40 mb-4`}></h1>
        <h1 className={`${styles.shimmer} w-full h-12 mb-4`}></h1>
        
      </div>
    </div>
  )
}

export default page
