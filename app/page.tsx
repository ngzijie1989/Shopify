import { ProductType, UserType } from "./lib/type";
import { getAllProducts } from "./actions/actions";
import ProductList from "./components/ProductList";

export async function Home() {
  const products: ProductType[] = await getAllProducts()

  return (
    <main>
        <ProductList products={products} />
    </main>
  );
}

export default Home;
