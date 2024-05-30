import { ProductType, UserType } from "./lib/type";
import { getAllProducts } from "./actions/actions";
import ProductList from "./components/ProductList";
import { auth } from "@/auth";

export async function Home() {
  const products: ProductType[] = await getAllProducts()
  const session: any | null = await auth()

  return (
    <main className="mt-5">
        <ProductList products={products} session={session} />
    </main>
  );
}

export default Home;
