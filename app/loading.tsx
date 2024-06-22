import ProductListSkeleton from "./components/skeletons/ProductListSkeleton";
import styles from "@/app/lib/css/images.module.css"

export async function Home() {


  return (
    <main className="mt-5">
      <div className={`${styles.shimmer} h-12 w-1/5 ms-2 mb-3`}></div>
      <div className={`${styles.slideImages} ${styles.shimmer} m-2`}></div>
      <div className="w-11/12">
        <div className="flex justify-between">
          <div className={`${styles.shimmer} h-12 w-1/5 ms-2 my-3`}></div>
          <div className={`${styles.shimmer} h-12 w-2/5 ms-2 my-3`}></div>
        </div>
        <ProductListSkeleton  />
      </div>
    </main>
  );
}

export default Home;