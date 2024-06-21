import styles from "@/app/lib/css/shimmer.module.css"

function loading() {
  return (
    <div className="w-4/5 mx-auto mt-5">
    <div className="flex w-full flex-col sm:flex-row">
      <div className="w-full sm:w-2/5">
        <div className={`${styles.shimmer} w-full h-96 sm:h-70`}></div>
      </div>

      <div className="sm:ms-5 sm:w-3/5 flex flex-col w-full mt-3 sm:mt-0">
        <div className="flex-1 text-center sm:text-left">
          <h1 className={`${styles.shimmer} w-full h-8`}></h1>
          <br></br>
          <h2 className={`${styles.shimmer} w-full h-8`}></h2>
          <p className={`${styles.shimmer} w-full h-8`}></p>
          <br></br>
          <h2 className={`${styles.shimmer} w-full h-8`}></h2>
          <p className={`${styles.shimmer} w-full h-8`}></p>
          <br></br>
          <h2 className={`${styles.shimmer} w-full h-8`}></h2>
          <p className={`${styles.shimmer} w-full h-8`}></p>
          <br></br>
          <h2 className={`${styles.shimmer} w-full h-8`}></h2>
          <p className={`${styles.shimmer} w-full h-8`}></p>
        </div> 

        <div>
          <div className={`${styles.shimmer} w-full h-8`}></div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default loading
