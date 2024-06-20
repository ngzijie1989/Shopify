import ProductListSkeleton from "./components/skeletons/ProductListSkeleton";

export async function Home() {


  return (
    <main className="mt-5">
        <ProductListSkeleton  />
    </main>
  );
}

export default Home;