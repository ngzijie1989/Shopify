import styles from "@/app/lib/css/shimmer.module.css"


async function page() {

  return (
    <div>
      <div className="w-full mx-auto mt-5 sm:w-4/5 p-2">

        <div className="w-full">
          <div className="flex justify-between">
            <h1 className={`${styles.shimmer} w-1/5 h-16`}></h1>
            <h1 className={`${styles.shimmer} w-1/5 h-16`}></h1>
          </div>

          <h1 className={`${styles.shimmer} h-32 mt-4`}></h1>

          <h1 className={`${styles.shimmer} h-32 mt-4`}></h1>

          <h1 className={`${styles.shimmer} h-32 mt-4`}></h1>

          <h1 className={`${styles.shimmer} h-16 mt-4`}></h1>
        </div>


      </div> 
    </div>

  )
}

export default page
